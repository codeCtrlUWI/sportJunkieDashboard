/**
 * Created by dylan on 2/27/17.
 */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import {CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AngularFire } from 'angularfire2';

@Injectable()

export class AuthGuard implements CanActivate{


  constructor(private af: AngularFire, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.af.auth.map((auth) => {
      if(auth == null ) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }).first()
  }
}


