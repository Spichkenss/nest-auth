import { LoginDto } from '../dto/login.dto';

import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { HashingService } from 'src/common/hashing/hashing.service';
import { JwtProvider } from '../providers/jwt.provider';
import { JWT_PROVIDER } from 'src/common/tokens/auth';
import { USER_REPOSITORY } from 'src/common/tokens/user';
import { IUserRepository } from 'src/user/repositories/user-repo.interface';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(JWT_PROVIDER) private readonly jwtProvider: JwtProvider,
    private readonly hashingService: HashingService,
    @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository,
  ) {}

  async execute(loginRequestDto: LoginDto.Request): Promise<LoginDto.Response> {
    const existedUser = await this.userRepo.findByLogin(loginRequestDto.login);

    if (!existedUser)
      throw new NotFoundException('Пользователя с таким логином не существует');

    const { credentials } = existedUser;

    if (!credentials)
      throw new NotFoundException('Записи для данного пользователя не найдено');

    const passwordMatchedWithItsHash = await this.hashingService.compare(
      loginRequestDto.password,
      credentials.passwordHash,
    );

    if (!passwordMatchedWithItsHash)
      throw new UnauthorizedException('Неверный логин или пароль');

    const accessToken = this.jwtProvider.signAccess({
      id: existedUser.id,
      role: existedUser.role,
    });

    const refreshToken = this.jwtProvider.signRefresh({
      id: existedUser.id,
      role: existedUser.role,
    });

    return { accessToken, refreshToken };
  }
}
