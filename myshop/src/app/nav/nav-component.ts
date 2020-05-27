import { Component } from '@angular/core';
import { AuthService } from '../service/auth-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: "header-bar",
  templateUrl: "./nav-bar-template.html",
  styles: [`
    .company_logo_txt
        {
          font-size: 29px;
          font-weight: bold;
          font-family: cursive;
        }
`]
  
})
export class NavComponent {

  constructor(private route: Router, public authService: AuthService) { }

	isUserLogIn(){return false;}

  logout() {
    console.log("User sucessfully logged out...")
    this.authService.logout();
    console.log("User sucessfully logged out...")
    this.route.navigateByUrl("/login");
  }
}
