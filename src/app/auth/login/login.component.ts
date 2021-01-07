import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel = {
    // tslint:disable-next-line:quotemark
    user_email: "" ,
    // tslint:disable-next-line:quotemark
    user_password: "" ,
    /*type: client*/
  };
  // tslint:disable-next-line:typedef-whitespace
  // tslint:disable-next-line:variable-name
  constructor(private _user: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onLoginSubmit(){
    console.log(this.userModel) ;
    this._user.signIn(this.userModel).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', `${data.token_type} ${data.access_token}`);
    }, error => {
      console.log(error);
    });
  }
}
