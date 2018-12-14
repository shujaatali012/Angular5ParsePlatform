export class UserRegister {
  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, password?: string, confirmPassword?: string, profilePictureUrl?: string, isAgree?: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.profilePictureUrl = profilePictureUrl;
    this.isAgree = isAgree;
  }

  public firstName: string;
  public lastName: string;
  public phone: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public profilePictureUrl: string;
  public isAgree: boolean;
}
