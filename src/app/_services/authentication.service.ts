import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  apiHost = 'http://local.wordpress.dev/wp-json';

  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post( this.apiHost + '/jwt-auth/v1/token', {username: username, password: password})
    .map( ( response: Response ) => {
      // login successful if there's a JWT token in the response
      const user = response.json();
      if (user && user.token) {
        // Store user details and token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    });
  }

  logout() {
    // remove user from local storage to logout user
    localStorage.removeItem('currentUser');
  }

}
