import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../service/auth-service';
import { IUser } from '../domain/Iuser';

@Component({
  templateUrl:'./profile-template.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private auth: AuthService) { }
  
  ngOnInit() {
    let profileFormControlFirstName = new FormControl(this.auth.currentAuthUser.firstName);
    let profileFormControlLastName = new FormControl(this.auth.currentAuthUser.lastName);
    this.profileForm = new FormGroup({
      firstName: profileFormControlFirstName,
      lastName: profileFormControlLastName
    });

  }

  
  save(profileValues) {
    let user = {
      firstName: profileValues.firstName,
      lastName: profileValues.lastName
     }
     this.auth.updateCurrentUserInfo(user);
      console.log(profileValues);
  }

}
