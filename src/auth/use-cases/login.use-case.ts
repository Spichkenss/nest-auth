import { IUseCase } from 'src/common/interfaces/use-case.interface';
import { LoginDto } from '../dto/login.dto';
import { ICredentialsRepository } from '../repositories/credentials-repo.interface';
import { Inject } from '@nestjs/common';
import { CREDENTIALS_REPOSITORY_INJECTION_TOKEN } from '../consts/auth-injection-tokens';

export class LoginUseCase
  implements IUseCase<LoginDto.Response, LoginDto.Request>
{
  constructor(
    @Inject(CREDENTIALS_REPOSITORY_INJECTION_TOKEN)
    private readonly credentialsRepo: ICredentialsRepository,
  ) {}

  execute(value: LoginDto.Request): Promise<LoginDto.Response> {
    return this.credentialsRepo.create();
  }
}
