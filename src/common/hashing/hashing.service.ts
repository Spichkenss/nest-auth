import { Injectable } from '@nestjs/common';
import bcryptjs from 'bcryptjs';

@Injectable()
export class HashingService {
  private readonly rounds = 12;

  async hash(value: string): Promise<string> {
    return bcryptjs.hash(value, this.rounds);
  }

  async compare(value: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(value, hash);
  }
}
