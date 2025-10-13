import { Injectable } from '@nestjs/common';
import { users } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}
  async getInfoUser(userId: string): Promise<users | null> {
    try {
      const infoUser: users | null = await this.prisma.users.findFirst({
        where: {
          id: userId,
        },
      });
      return infoUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
