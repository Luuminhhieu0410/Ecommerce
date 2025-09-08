import {
  Body,
  Controller,
  Get,
  Query,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';

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

  @Get('/login/google')
  async loginGoogle(@Query('token') tokenGoogle: string) {
    try {
      // console.log('data gui len ' + tokenGoogle);
      const dataVerifyToken: DecodedIdToken = await admin
        .auth()
        .verifyIdToken(tokenGoogle);
      // console.log(dataVerifyToken);
      const user: UserRecord = await admin
        .auth()
        .getUser(dataVerifyToken.user_id);
      if (!user.email) throw new UnauthorizedException();
      return this.authService.LoginWithGoogle(user?.email);
    } catch (e) {
      console.log(e);
      throw new BadRequestException();
    }
  }
}
