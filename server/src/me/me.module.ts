import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';

import { AddressModule } from './address/address.module';

@Module({
  imports: [ProfileModule, AddressModule],
})
export class MeModule {}
