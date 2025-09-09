import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CredentialsEntity } from 'src/auth/entities/credentials.entity';
import { UserRole } from '../consts/user-role.enum';

export type UserId = string;

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UserId;

  @Column({ unique: true, type: 'citext' })
  login: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.ADMIN })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => CredentialsEntity, (c) => c.user, { cascade: true })
  credentials: CredentialsEntity;
}
