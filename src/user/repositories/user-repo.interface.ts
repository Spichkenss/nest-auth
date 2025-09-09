import { UserEntity, UserId } from '../entities/user.entity';

export interface IUserRepository {
  findById(id: UserId): Promise<UserEntity | null>;
  findByLogin(login: UserEntity['login']): Promise<UserEntity | null>;
}
