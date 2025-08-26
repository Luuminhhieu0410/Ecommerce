import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Request,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import admin from 'firebase-admin';
import { serviceAccount } from './google';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  // @Post('login')
  // signIn(@Body() : Record<string, any>) {
  //   return this.authService.signIn();
  // }

  @UseGuards(AuthGuard)
  @Get('/profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @Get('/login/google')
  async loginGoogle(
    @Query('token') tokenGoogle: string,
    @Res({ passthrough: true }) response: any,
  ) {
    // console.log('data gui len ' + tokenGoogle);
    const dataVerifyToken: DecodedIdToken = await admin
      .auth()
      .verifyIdToken(tokenGoogle);
    // console.log(dataVerifyToken);
    const user: UserRecord = await admin
      .auth()
      .getUser(dataVerifyToken.user_id);
    if (!user.email) throw new UnauthorizedException('Chưa xác định');
    return this.authService.LoginWithGoogle(user?.email);
  }
}
