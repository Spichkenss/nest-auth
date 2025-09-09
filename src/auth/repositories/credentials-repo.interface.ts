import { UserId } from 'src/user/entities/user.entity';
import { CredentialsEntity } from '../entities/credentials.entity';

export interface ICredentialsRepository {
  save(value: CredentialsEntity): Promise<CredentialsEntity>;
  findByUserId(userId: UserId): Promise<CredentialsEntity | null>;
  remove(id: CredentialsEntity['id']): Promise<boolean>;
  update(
    id: CredentialsEntity['id'],
    updateCredeentialsDto: Partial<CredentialsEntity>,
  ): Promise<CredentialsEntity>;
}
