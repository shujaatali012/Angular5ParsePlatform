export class UserLogin {
  constructor(email?: string, password?: string, isRememberMe?: boolean) {
    this.email = email;
    this.password = password;
    this.isRememberMe = isRememberMe;
  }

  public email: string;
  public password: string;
  public isRememberMe: boolean;
}
