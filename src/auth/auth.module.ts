import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginController } from './controllers/auth-login.controller';
import { HashingService } from 'src/common/hashing/hashing.service';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from './configs/get-jwt-config';
import { JwtAccessStrategy } from './strategies/jwt-auth.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredentialsEntity } from './entities/credentials.entity';
import { UserEntity } from 'src/user/entities/user.entity';

import { CredentialsPgsqlRepositoryImpl } from './repositories/credentials-pg-repo.impl';
import { JwtProvider } from './providers/jwt.provider';
import { LoginUseCase } from './use-cases/login.use-case';
import { CREDENTIALS_REPOSITORY, JWT_PROVIDER } from 'src/common/tokens/auth';
import { UserModule } from 'src/user/user.module';

const authUseCases = [LoginUseCase] as const;

@Module({
  imports: [
    JwtModule.register(getJwtConfig()),
    TypeOrmModule.forFeature([CredentialsEntity, UserEntity]),
    UserModule,
  ],
  controllers: [AuthLoginController],
  providers: [
    ...authUseCases,
    AuthService,
    HashingService,
    JwtAccessStrategy,
    {
      provide: JWT_PROVIDER,
      useClass: JwtProvider,
    },
    {
      provide: CREDENTIALS_REPOSITORY,
      useClass: CredentialsPgsqlRepositoryImpl,
    },
  ],
})
export class AuthModule {}
