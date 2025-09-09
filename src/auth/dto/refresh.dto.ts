import { IsJWT, IsNotEmpty, IsString } from 'class-validator';

export namespace RefreshDto {
  export class Request {
    @IsString()
    @IsNotEmpty()
    @IsJWT()
    refreshToken: string;
  }
}
