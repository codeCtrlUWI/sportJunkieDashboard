import { Component } from '@angular/core';
import { AngularFire} from 'angularfire2';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})


export class AppComponent {
  items: FirebaseListObservable<any>;


constructor(public af: AngularFire){
  this.items= af.database.list('/Article')

  this.items.subscribe(
    val=> console.log(val)
  );


}




}
