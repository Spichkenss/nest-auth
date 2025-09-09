import { InjectRepository } from '@nestjs/typeorm';
import { UserId, UserEntity } from '../entities/user.entity';
import { IUserRepository } from './user-repo.interface';
import { Repository } from 'typeorm';

export class UserPgsqlRepositoryImlp implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity) private readonly repo: Repository<UserEntity>,
  ) {}

  findByLogin(login: UserEntity['login']): Promise<UserEntity | null> {
    return this.repo.findOne({ where: { login } });
  }

  findById(id: UserId): Promise<UserEntity | null> {
    return this.repo.findOne({ where: { id } });
  }
}
