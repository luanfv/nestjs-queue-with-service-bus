import { Injectable } from '@nestjs/common';
import { ServiceBusAbstract } from '../infra/service-bus.abstract';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SendWelcomeEmailService extends ServiceBusAbstract {
  constructor(private readonly configService: ConfigService) {
    super(
      configService.get('AZURE_SERVICE_BUS_SEND_WELCOME_EMAIL_CONNECTION'),
      configService.get('AZURE_SERVICE_BUS_SEND_WELCOME_EMAIL_QUEUE'),
    );
  }
}
