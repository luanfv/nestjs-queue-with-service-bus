import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CreateUserApplicationService } from './application/create-user.application.service';
import { SendWelcomeEmailService } from './service/send-welcome-email.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AuthController],
  providers: [CreateUserApplicationService, SendWelcomeEmailService],
})
export class AppModule {}
