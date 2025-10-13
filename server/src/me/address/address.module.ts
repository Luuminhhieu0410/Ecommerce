import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AddressModule {}
