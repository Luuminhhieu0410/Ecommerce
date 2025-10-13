import { Injectable } from '@nestjs/common';
import { users } from 'generated/prisma';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async findUserByEmail(email: string): Promise<users | null> {
    console.log('email nhận ' + email);
    return await this.prismaService.users.findFirst({
      where: {
        email: email,
      },
    });
  }
}
