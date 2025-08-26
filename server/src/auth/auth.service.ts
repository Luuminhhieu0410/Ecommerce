import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtPayload } from 'src/types/jwtpayload.type';
import { UsersService } from '../admin/users/users.service';
import { users } from 'generated/prisma';
import { jwtConstants } from './auth.constant';

type ReturnDataLoginGoogleType = {
  access_token: string;
  data: users;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async LoginWithGoogle(
    email: string,
  ): Promise<ReturnDataLoginGoogleType | null> {
    const data: users | null = await this.usersService.findUserByEmail(email);
    console.log('query result' + JSON.stringify(data));

    if (data == null)
      throw new UnauthorizedException('Email chưa được đăng kí');
    const payload: jwtPayload = {
      id: data.id,
      email: data.email,
      name: data.full_name,
    };
    return {
      data,
      access_token: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.access_token_secret,
        expiresIn: '900s',
      }),
    };
  }
}
