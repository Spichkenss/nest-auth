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
import { CREDENTIALS_REPOSITORY_INJECTION_TOKEN } from './consts/auth-injection-tokens';
import { CredentialsPgsqlRepositoryImpl } from './repositories/credentials-pg-repo.impl';

@Module({
  imports: [
    JwtModule.register(getJwtConfig()),
    TypeOrmModule.forFeature([CredentialsEntity, UserEntity]),
  ],
  controllers: [AuthLoginController],
  providers: [
    AuthService,
    HashingService,
    JwtAccessStrategy,
    {
      provide: CREDENTIALS_REPOSITORY_INJECTION_TOKEN,
      useClass: CredentialsPgsqlRepositoryImpl,
    },
  ],
})
export class AuthModule {}
