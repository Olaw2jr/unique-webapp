import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private router: Router ) {}
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( localStorage.getItem('currentUser') ) {
      // Huyu boya ameruhusiwa...
      return true;
    }

    // Boya mvammizi tuuu
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
