import { UseGuards } from '@nestjs/common';
import { JwtAccessStrategy } from '../strategies/jwt-auth.strategy';

export const AuthRequired = () => UseGuards(JwtAccessStrategy);
