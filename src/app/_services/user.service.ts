import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  apiHost = 'http://local.wordpress.dev/wp-json/wp/v2/users';

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`this.apiHost`, this.jwt()).map((res: Response) => res.json());
  }

  me() {
    return this.http.get(`${this.apiHost}/me`, this.jwt()).map((res: Response) => res.json());
  }

  get(id: number) {
    return this.http.get(`${this.apiHost}/${id}`, this.jwt()).map((res: Response) => res.json());
  }

  create(id: number) {
    return this.http.post(`${this.apiHost}/${id}`, this.jwt()).map((res: Response) => res.json());
  }

  update(id: number) {
    return this.http.post(`${this.apiHost}/${id}`, this.jwt()).map((res: Response) => res.json());
  }

  delete(id: number) {
    return this.http.delete(`${this.apiHost}/${id}`, this.jwt()).map((res: Response) => res.json());
  }

  private jwt() {
    // Create Authorization headers
    const currentUser = JSON.parse(localStorage.getItem(`currentUser`));
    if ( currentUser && currentUser.token ) {
      const headers = new Headers({ 'Authorization' : 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

}
