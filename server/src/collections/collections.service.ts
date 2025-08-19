import { Injectable } from '@nestjs/common';
import { collections } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<collections[] | null> {
    try {
      return await this.prisma.collections.findMany();
    } catch (error) {
      console.log('error: ' + error);
      return [];
    }
  }
}
