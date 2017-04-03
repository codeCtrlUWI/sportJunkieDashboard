/**
 * Created by dylan on 4/1/17.
 */

import { Component } from '@angular/core';
import { football, cricket, swimming} from './sports';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import * as firebase from "firebase";
import {Router} from "@angular/router";



@Component({
  selector: 'score-board',
  templateUrl: './score-board.component.html',
  styleUrls:['./score-board.component.css'],
})

export class ScoreBoardComponent {

  category: String;
  sport;
  scores: FirebaseListObservable<any[]>;
  scoreUpdates: FirebaseObjectObservable<any>;


  constructor(private af: AngularFire, private router: Router) {

    /*this.af.auth.subscribe(authData => {
        console.log(authData);

        let uid = authData.uid;

        this.articles = this.af.database.list('/ARTICLES', {
          query: {
            orderByChild: 'authorUID',
            equalTo: uid
          }
        });

        this.articles.subscribe(
          val => console.log(val)
        );
      }
    );*/
    this.scores=this.af.database.list('/SCORES/');
    this.scores.subscribe(val=>{
      console.log(val);
    })

  }

listArticles(){
    this.router.navigate(['/dashboard/']);
}

  categoryChange(this,dropdown){
    this.category= dropdown.value;
    this.sport=null;
    switch(this.category){
      case 'Football':
        this.sport=new football();
        console.log(this.sport.team1)
        break;
      case 'Cricket':
        this.sport= new cricket();
        break;
      case 'Swimming':
        this.sport=new swimming();
        console.log(this.sport.swimmers)
        break;


    }

  }

  addSwimmer(formData){
    console.log(formData.value.batting)
    //this.sport.swimmers.formData.value.sname=formData.value.score;
    //this.sport.team1=formData.value.team1;
    //console.log(this.sport.team1);
    console.log(this.sport.swimmers);
  }

  createGame(formData){
    console.log(formData.value);
    let gameObject=formData.value;

    gameObject.status="In-Progess";
    gameObject.category=this.category;
    console.log(gameObject);
    var scoreRef=firebase.database().ref('SCORES/');
    var newscoreRef=scoreRef.push();
    newscoreRef.set(gameObject);



  }

  update(formData, key){
    console.log(formData.value);
    console.log(key);
    this.scoreUpdates=this.af.database.object('SCORES/'+key+'/');
    this.scoreUpdates.update(formData.value);
  }

}
