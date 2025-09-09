import { Repository } from 'typeorm';
import { CredentialsEntity } from '../entities/credentials.entity';
import { ICredentialsRepository } from './credentials-repo.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserId } from 'src/user/entities/user.entity';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/common/tokens/user';
import { IUserRepository } from 'src/user/repositories/user-repo.interface';

export class CredentialsPgsqlRepositoryImpl implements ICredentialsRepository {
  constructor(
    @InjectRepository(CredentialsEntity)
    private readonly credsRepo: Repository<CredentialsEntity>,
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  findByUserId(userId: UserId): Promise<CredentialsEntity | null> {
    return this.credsRepo.findOne({
      where: { user: { id: userId } },
      relations: { user: true },
    });
  }

  remove(id: CredentialsEntity['id']): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  update(
    id: CredentialsEntity['id'],
    updateCredeentialsDto: Partial<CredentialsEntity>,
  ): Promise<CredentialsEntity> {
    throw new Error('Method not implemented.');
  }

  async save(credentials: CredentialsEntity): Promise<CredentialsEntity> {
    return this.credsRepo.save(credentials);
  }
}
