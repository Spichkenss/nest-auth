import { Repository } from 'typeorm';
import { CredentialsEntity } from '../entities/credentials.entity';
import { ICredentialsRepository } from './credentials-repo.interface';
import { InjectRepository } from '@nestjs/typeorm';

export class CredentialsPgsqlRepositoryImpl implements ICredentialsRepository {
  constructor(
    @InjectRepository(CredentialsEntity)
    private readonly repo: Repository<CredentialsEntity>,
  ) {}

  create(value: CredentialsEntity): CredentialsEntity {}
}
