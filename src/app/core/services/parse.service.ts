///// parse service

import { Injectable } from '@angular/core';
import * as Parse from 'parse';

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
  signIn(userLogin: UserLogin): Promise<any> {

    return new Promise((resolve, reject) => {
      Parse.User.logIn(userLogin.email, userLogin.password)
        .then(user => {
          resolve(user);
        },
          error => {
            reject(error.message);
          });
    });
  }

  // parse framwork signup
  signUp(userRegister: UserRegister) {

    return new Promise((resolve, reject) => {

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

      user.signUp(null).then(user => {
        resolve(user);
      },
        error => {
          reject(error.message);
        });
    });
  }

  // parse upload profile picture
  uploadProfilePicture(name: string, file: any): Promise<Parse.File> {

    return new Promise((resolve, reject) => {

      let parseFile = new Parse.File(name, file);

      parseFile.save().then((parseFile: Parse.File) => {
        resolve(parseFile);
      },
        error => {
          reject(error.message);
        });
    });
  }

  // parse framwork logout
  logOut(): Promise<any> {

    return new Promise((resolve, reject) => {
      Parse.User.logOut().then(user => {
        resolve(user);
      },
        error => {
          reject(error);
        });
    });
  }

  // parse check isloggedin
  isLoggedIn(): boolean {
    const currentUser = Parse.User.current();
    return !!(currentUser);
  }

  // parse framwork forgot password
  resetPassword(email): Promise<any> {

    return new Promise((resolve, reject) => {
      Parse.User.requestPasswordReset(email).then(response => {
        resolve(response);
      },
        error => {
          reject(error.message);
        });
    });
  }


  //////////////////////////////////
  ////getProducts(): Promise<any> {
  ////  let self = this;

  ////  return new Promise((resolve, reject) => {
  ////    resolve(self.parse.Object);
  ////      //.then(pro => {
  ////      //  resolve(pro);
  ////      //},
  ////      //  error => {
  ////      //    reject(error);
  ////      //  });
  ////  });
  ////}
}
