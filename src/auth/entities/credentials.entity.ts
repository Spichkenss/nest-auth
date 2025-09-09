import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserEntity } from 'src/user/entities/user.entity';

@Entity({ name: 'credentials' })
export class CredentialsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'password_hash' })
  passwordHash: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserEntity, (u) => u.credentials, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
