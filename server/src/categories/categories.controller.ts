import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryType, ConvertCategory } from 'src/types/category.type';
import { convert } from 'src/utils/ConvertCategory';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(): Promise<ConvertCategory[] | []> {
    const categories = await this.categoriesService.findAll();
    if (categories == null) return [];
    const newCategories: ConvertCategory[] = convert(categories);
    return newCategories;
  }
}
