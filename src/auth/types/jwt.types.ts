export type JwtPayload = {
  id: string;
  role: string;
};

export interface IJwtProvider {
  signAccess(payload: JwtPayload): string;
  signRefresh(payload: JwtPayload): string;
  verifyAccess(token: string): any;
  verifyRefresh(token: string): any;
}
