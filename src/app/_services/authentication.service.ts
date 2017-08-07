import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  apiHost = 'http://local.wordpress.dev/wp-json';

  // Change this loggedin property to a subject(somo)
  loggedIn: boolean;

  constructor(private http: Http) {}

  login(username: string, password: string) {
    return this.http.post( this.apiHost + '/jwt-auth/v1/token', {username: username, password: password})
    .map( ( response: Response ) => {
      // login successful if there's a JWT token in the response
      const user = response.json();
      if (user && user.token) {
        // Store user details and token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.loggedIn = true;
      }
      return user;
    });
  }

  logout(): void {
    // remove user from local storage to logout user
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  isLoggedIn() {
    if (localStorage.getItem(`currentUser`) == null) {
      this.loggedIn = false;
      return this.loggedIn;
    } else {
      this.loggedIn = true;
      return this.loggedIn;
    }
  }

}
