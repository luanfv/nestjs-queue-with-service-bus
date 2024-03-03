import { Injectable } from '@nestjs/common';
import { SendWelcomeEmailService } from 'src/service/send-welcome-email.service';

@Injectable()
export class CreateUserApplicationService {
  constructor(
    private readonly sendWelcomeEmailService: SendWelcomeEmailService,
  ) {}

  async execute({ email, name }: { email: string; name: string }) {
    await this.sendWelcomeEmailService.publish({
      body: {
        name,
        email,
      },
    });
  }
}
