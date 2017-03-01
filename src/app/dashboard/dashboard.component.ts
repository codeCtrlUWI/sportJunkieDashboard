/**
 * Created by dylan on 2/26/17.
 */
import { Component } from '@angular/core';
import { AngularFire , FirebaseListObservable } from 'angularfire2';
import {Router} from "@angular/router";



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {

  articles: FirebaseListObservable<any>;
  constructor(private af: AngularFire, private router: Router) {
   this.af.auth.subscribe(authData => {
     console.log(authData);
     let uid=authData.uid;
     this.articles=this.af.database.list('/ARTICLES', {
       query: {
         orderByChild: 'authorUID',
         equalTo: uid
       }
     })
     this.articles.subscribe(
       val => console.log(val)
     );
     }

   );
  }

  logout() {
    this.af.auth.logout().then(
      (success) => {
        this.router.navigate(['/login']);
      })
  }
}
