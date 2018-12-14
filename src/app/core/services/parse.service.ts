///// parse service

import { Injectable } from '@angular/core';
import * as Parse from 'parse';

import { Observable } from 'rxjs';

import { ConfigurationService } from './configuration.service';
import { UserLogin } from '../models/user-login.model';
import { UserRegister } from '../models/user-register.model';

@Injectable()
export class ParseService {

  constructor(private configurationService: ConfigurationService) {
    Parse.initialize(this.configurationService.parseAppId, this.configurationService.parseClientKey);
    (Parse as any).serverURL = this.configurationService.serverUrl;
  }

  // parse framwork signin
  signIn(userLogin: UserLogin): Observable<Parse.User> {

    return Observable
      .fromPromise(Parse.User.logIn(userLogin.email, userLogin.password))
      .map((parseUser: Parse.User) => parseUser);

  }

  // parse framwork signup
  signUp(userRegister: UserRegister): Observable<Parse.User> {

    let user = new Parse.User();
    user.set('username', userRegister.email);
    user.set('password', userRegister.password);
    user.set('email', userRegister.email);
    user.set('phone', userRegister.phone);
    user.set('firstName', userRegister.firstName);
    user.set('lastName', userRegister.lastName);
    // code: 119
    // error: "Permission denied for action addField on class _User."
    //user.set('profilePhoto', userRegister.profilePictureUrl);

    return Observable
      .fromPromise(user.signUp(null))
      .map((parseUser: Parse.User) => parseUser);
  }

  // parse upload profile picture
  uploadProfilePicture(name: string, file: any): Observable<Parse.File> {

    let parseFile = new Parse.File(name, file);

    return Observable
      .fromPromise(parseFile.save())
      .map((parseFile: Parse.File) => parseFile);
  }

  // parse framwork logout
  logOut(): Observable<Parse.User> {

    return Observable
      .fromPromise(Parse.User.logOut())
      .map((parseUser: Parse.User) => parseUser);
    
  }

  // parse check isloggedin
  isLoggedIn(): boolean {
    const currentUser = Parse.User.current();
    return !!(currentUser);
  }

  // parse framwork forgot password
  resetPassword(email): Observable<Parse.User> {

    return Observable
      .fromPromise(Parse.User.requestPasswordReset(email))
      .map((parseUser: Parse.User) => parseUser);

  }
  
}
