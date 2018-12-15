export class UserRegister {
  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, password?: string, confirmPassword?: string, profilePhoto?: string, isAgree?: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.profilePhoto = profilePhoto;
    this.isAgree = isAgree;
  }

  public firstName: string;
  public lastName: string;
  public phone: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public profilePhoto: string;
  public isAgree: boolean;
}
