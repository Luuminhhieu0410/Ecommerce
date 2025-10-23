import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { PrismaModule } from '@/prisma/prisma.module';


@Module({
  controllers: [EmailController],
  providers: [EmailService],
  imports: [PrismaModule],
})
export class EmailModule {}
