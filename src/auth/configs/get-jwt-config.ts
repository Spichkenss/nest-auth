import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const getJwtConfig = (): JwtModuleAsyncOptions => {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      global: true,
      secret: configService.getOrThrow<string>('ACCESS_SECRET'),
      signOptions: {
        expiresIn: configService.getOrThrow<string>('JWT_ACCESS_EXPIRES'),
      },
    }),
  };
};
