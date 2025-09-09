import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDbConfig } from './config/get-db-config';
import * as path from 'path';

const appModules = [AuthModule, UserModule] as const;
const envFilePath = path.resolve(__dirname, '../../.env');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    TypeOrmModule.forRootAsync(getDbConfig()),
    ...appModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
