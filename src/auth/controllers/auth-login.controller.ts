import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { AuthRequired } from '../guards/auth.guard';
import { AuthService } from '../auth.service';

@Controller('auth')
export class AuthLoginController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @AuthRequired()
  login(@Body() loginRequestDto: LoginDto.Request): Promise<LoginDto.Response> {
    return this.authService.login(loginRequestDto);
  }
}
