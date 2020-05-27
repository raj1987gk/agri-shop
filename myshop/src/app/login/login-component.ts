
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth-service';

@Component({
  templateUrl: './login-template.html',
  styleUrls: ['./login-styles.css']
})
export class LoginComponent implements OnInit{

  email: string;
  password: string;
  isAuthenticated: boolean;
  constructor(private router: Router, private autService: AuthService) { }

  login(formValues) {

    console.log(formValues);
    if (this.autService.authenticate(formValues.email, formValues.password)) {
      this.isAuthenticated = true;
      this.navigateToHome();

    } else {
      this.isAuthenticated = false;
      this.navigateToLogin();
    }    
  }


  

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  

  ngOnInit() {
     console.log("user login page")
    if (this.autService.isUserAuthenticated()) {
            this.navigateToHome();
    } else {
      this.navigateToLogin();
    }    
   
  }


}
