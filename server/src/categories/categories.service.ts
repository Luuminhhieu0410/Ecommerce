import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryType } from 'src/types/category.type';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  async findAll(): Promise<CategoryType[] | null> {
    try {
      return await this.prisma.categories.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
          parent_id: true,
        },
      });
    } catch (error) {
      console.log('DB Error: ' + error);
      return null;
    }
  }
}
