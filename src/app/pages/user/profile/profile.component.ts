import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = '' ;
  id: any ;
  constructor(

    // tslint:disable-next-line:variable-name
    private _user: UserService,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._user.showSingleUser(this._route.snapshot.paramMap.get('id')).subscribe(data => {
        this.user = data.user[0] ;

            });
          }

        }

