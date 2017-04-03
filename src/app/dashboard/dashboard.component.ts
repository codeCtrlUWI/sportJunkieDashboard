/**
 * Created by dylan on 2/26/17.
 */
import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import {Router} from "@angular/router";



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css'],
})

export class DashboardComponent {
  //articles: FirebaseListObservable<any[]>;
  article: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire, private router: Router) {

  }





  logout(){
    this.af.auth.logout().then(
      (success) => {
        this.router.navigate(['/login']);
        this.af.auth.unsubscribe();
          window.location.reload();
      })
  }
}
