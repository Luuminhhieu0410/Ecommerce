import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProfileService } from './profile.service';
// import { jwtPayload } from 'src/types/jwtpayload.type';
import { Request } from 'express';
import { users } from 'generated/prisma';
interface CustomeRequest extends Request {
  user: users;
}

@Controller('/me/profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @UseGuards(AuthGuard)
  @Get()
  getProfile(@Req() req: CustomeRequest) {
    // const user = req.user || null;
    // return this.profileService.getInfoUser(user.id);
  }
}
