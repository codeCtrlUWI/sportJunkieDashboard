/**
 * Created by dylan on 3/5/17.
 */
import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Router} from "@angular/router";



@Component({
  selector: 'list-article',
  templateUrl: './list-article.component.html',
  styleUrls:['./list-article.component.css'],
})

export class ListArticleComponent {
  articles: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire, private router: Router) {

    this.af.auth.subscribe(authData => {
        console.log(authData);

        let uid=authData.uid;

        this.articles=this.af.database.list('/ARTICLES', {
          query: {
            orderByChild: 'authorUID',
            equalTo: uid
          }
        });

        this.articles.subscribe(
          val => console.log(val)
        );
      }

    );

  }
  addArticle(){
    this.router.navigate(['/dashboard/add']);
  }

  viewArticle(articleId){
    this.router.navigate(['/dashboard/view',articleId]);
  }


 }
