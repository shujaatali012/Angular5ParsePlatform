///// parse service

import { Injectable } from '@angular/core';
import * as Parse from 'parse';

import { Observable } from 'rxjs';

import { ConfigurationService } from './configuration.service';
import { UserLogin } from '../models/user-login.model';
import { UserRegister } from '../models/user-register.model';
import { error } from 'util';

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

  // parse upload profile picture
  uploadProfilePicture(name: string, file: any): Observable<Parse.File> {

    let parseFile = new Parse.File(name, file);

    return Observable
      .fromPromise(parseFile.save())
      .map((parseFile: Parse.File) => parseFile);
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
    //user.set('profilePhoto', userRegister.profilePhoto);

    //console.log(user);

    return Observable
      .fromPromise(user.signUp(null))
      .map((parseUser: Parse.User) => parseUser);
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

    if (!!(currentUser)) {
      currentUser
    }
    
    return !!(currentUser);
  }

  // parse framwork forgot password
  resetPassword(email): Observable<Parse.User> {

    return Observable
      .fromPromise(Parse.User.requestPasswordReset(email))
      .map((parseUser: Parse.User) => parseUser);

  }


  ///////////////////////////////////////////////////////////

  // get user list

  //getAll(): Observable<Parse.User[]> {

  //  const query = new Parse.Query(Parse.User);
  //  //query..equalTo("phone", "0508260614");

  //  return Observable
  //    .fromPromise(query.find())
  //    .map((parseUsers: Parse.User[]) => parseUsers);

  //}

  // save product to show on product list page
  //saveDefaultProducts() {
  //  const MobileProduct = Parse.Object.extend("MobileProducts");
  //  const mobileProduct = new MobileProduct();

  //  mobileProduct.set("name", "Apple iPhone Xs Max");
  //  mobileProduct.set("details", "Apple iPhone Xs Max Without FaceTime - 64GB, 4G LTE, Gold");
  //  mobileProduct.set("description", "The Apple iPhone Xs Max smartphone boasts of its large 6.5inch Super Retina OLED display that renders exceptional quality images. With a high resolution of 2688 × 1242 pixel and a pixel density of 458ppi, it delivers images with excellent color quality. Show off your photography skills, with the 12MP rear and 7MP front camera.");
  //  mobileProduct.set("price", "4,198.99 AED");
  //  mobileProduct.set("color", "Gold");
  //  mobileProduct.set("memory", "4GB");
  //  mobileProduct.set("storage", "64GB");
  //  mobileProduct.set("sims", "Single");
  //  mobileProduct.set("Warranty", "1Year");
  //  mobileProduct.set("image", "http://eyenight-dev.herokuapp.com/parse/files/1TcAvt0wD6YDxEffIJ7qJtRQvMXzu7/0020e598d218581f6a7051417eb4e57e_item_XL_38545187_150300071.jpg");

  //  return Observable
  //    .fromPromise(mobileProduct.save())
  //    .map((mobileProduct: Parse.Object) => mobileProduct);
  //}

  getAllProducts(): Observable<Parse.Object[]> {

    const query = new Parse.Query('MobileProducts');
    query.lessThan("createdAt", new Date());

    return Observable
      .fromPromise(query.find())
      .map((parseProducts: Parse.Object[]) => parseProducts);

  }

}
