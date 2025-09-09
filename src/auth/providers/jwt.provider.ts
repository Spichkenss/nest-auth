import { Injectable } from '@nestjs/common';
import { IJwtProvider, JwtPayload } from '../types/jwt.types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtProvider implements IJwtProvider {
  constructor(private readonly jwtService: JwtService) {}

  signAccess(payload: JwtPayload): string {
    return this.jwtService.sign(payload);
  }

  signRefresh(payload: JwtPayload): string {
    return this.jwtService.sign(payload);
  }

  verifyAccess(token: string) {
    return this.jwtService.verify(token);
  }

  verifyRefresh(token: string) {
    return this.jwtService.verify(token);
  }
}
