import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserApplicationService } from './application/create-user.application.service';

@Controller()
export class AuthController {
  constructor(
    private readonly createUserApplicationService: CreateUserApplicationService,
  ) {}

  @Post()
  async createUser(@Body() body: { email: string; name: string }) {
    await this.createUserApplicationService.execute({
      email: body.email,
      name: body.name,
    });

    return 'Membro registrado! CONFIA';
  }
}
