import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export namespace LoginDto {
  export class Request {
    @IsNotEmpty()
    @IsString()
    readonly login: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;
  }

  export class Response {
    readonly message: string;
  }
}
