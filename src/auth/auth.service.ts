import { Injectable } from '@nestjs/common';
import { HashingService } from 'src/common/hashing/hashing.service';

@Injectable()
export class AuthService {
  constructor(private readonly hashingService: HashingService) {}
}
