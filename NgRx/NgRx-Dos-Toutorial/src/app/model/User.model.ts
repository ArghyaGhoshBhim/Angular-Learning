export class User {
  constructor(
    private email: string,
    private refreshToken: string,
    private expiresIn: Date,
    private localId: string
  ) {}
}
