import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/admin/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findUserByEmail(email);
  }
}
