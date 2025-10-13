import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@/auth/auth.guard';

@Controller('address')
export class AddressController {
  @Get('/test')
  @UseGuards(AuthGuard)
  test() {
    return 'test';
  }
}
