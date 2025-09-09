import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { AuthRequired } from '../guards/auth.guard';

@Controller('auth')
export class AuthLoginController {
  @Post('login')
  @AuthRequired()
  login(@Body() loginDto: LoginDto.Request): Promise<LoginDto.Response> {
    return Promise.resolve({ message: 'login' });
  }
}
