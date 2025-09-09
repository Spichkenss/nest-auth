import { Module, Provider } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserPgsqlRepositoryImlp } from './repositories/user-pg-repo.impl';
import { USER_REPOSITORY } from 'src/common/tokens/user';

const EXPORTED_PROVIDERS = [
  { provide: USER_REPOSITORY, useClass: UserPgsqlRepositoryImlp },
] satisfies Provider[];

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, ...EXPORTED_PROVIDERS],
  exports: [...EXPORTED_PROVIDERS],
})
export class UserModule {}
