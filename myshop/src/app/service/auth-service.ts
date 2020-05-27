import { Injectable } from '@angular/core';
import { IUser } from '../domain/Iuser';

@Injectable()
export class AuthService {

  isAuthenticated: boolean;
  currentAuthUser:IUser

  authenticate(userName: string, password: string) {
    if ( true || userName === "dummy" && password === "dummy") {
      console.log("User successfully authenticated...");
      this.isAuthenticated = true;
      this.currentAuthUser = {
        firstName:"Raj",
        lastName:"Goud"
        } 
      return true;
    }
    console.log("User Not authenticated...");

  }

  isUserAuthenticated() {
    console.log("user loggedin Staus: " + this.isAuthenticated)
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
  }

  updateCurrentUserInfo(user: IUser) {
    this.currentAuthUser = user;
  }
}
