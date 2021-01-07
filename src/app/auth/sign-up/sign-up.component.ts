import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userregisterForm ={
    "user_name":"",
    'user_email':"",
    'user_password': "",
    'user_phoneNumber': "",
    user_address: {
      "country": "",
      "city": "",
      "detailedAddress": ""
    }

  }
  constructor(private _user:UserService ,private _route:Router) { }

  ngOnInit(): void {
  }
  reg(){
  //console.log(this.userregisterForm);
   this._user.registerUser(this.userregisterForm).subscribe(data=>{
      console.log(data);
      localStorage.setItem('token',`${data.token}`);
      this._route.navigate(['/home'])
    },error=>{
      console.log(error)
    })

  }


  }
