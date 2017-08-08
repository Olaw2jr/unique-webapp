import { Component, OnInit } from '@angular/core';

import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  users = [];

  constructor(private userservice: UserService) { }

  private getUser () {
    this.userservice.me().subscribe(users => { this.users = users; console.log(users.avatar_urls); });
  }

  ngOnInit() {
    this.getUser();
    // console.log( this.users );
  }

}
