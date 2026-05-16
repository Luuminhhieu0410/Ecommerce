import { Controller, Get, Param } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}
  @Get('/:email')
  async sendMail(@Param() param: any) {
    console.log(param.email);
  
    const email = param.email || '';
    const responeEmailSend = await this.emailService.sendMail(email, 234);
    return responeEmailSend;
  }
}
