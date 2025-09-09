export type JwtAccessPayload = {
  sub: string;
  id: string;
  role: string;
  iat: number;
  exp: number;
};
