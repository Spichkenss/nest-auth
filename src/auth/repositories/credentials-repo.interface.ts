import { CredentialsEntity } from '../entities/credentials.entity';

type CreateCredentialsEntityDto = Pick<
  CredentialsEntity,
  'passwordHash' | 'user'
>;

export interface ICredentialsRepository {
  create(value: CredentialsEntity): CredentialsEntity;
}
