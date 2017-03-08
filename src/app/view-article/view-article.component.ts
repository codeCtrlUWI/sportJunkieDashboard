/**
 * Created by dylan on 3/8/17.
 */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { FirebaseObjectObservable, AngularFire} from 'angularfire2';
import { ArticleService } from '../dashboard/article.service';
import {Location }  from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view-article.component.html',
  styleUrls:['./view-article.component.css']
})

export class ViewArticleComponent implements OnInit {

  //article: FirebaseObjectObservable<any>;
 // constructor(private as: ArticleService, private route:ActivatedRoute, private location: Location){}
  ngOnInit(): void {

   // this.route.params.switchMap((params:Params)=>this.as.getArticle(+params['id'])).subscribe(article => this.article=article);
   // console.log(this.article);
  }


}
