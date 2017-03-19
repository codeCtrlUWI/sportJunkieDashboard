/**
 * Created by dylan on 3/5/17.
 */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { FirebaseObjectObservable, AngularFire} from 'angularfire2';
import { ArticleService } from '../dashboard/article.service';
import {Location }  from '@angular/common';


@Component({
  selector: 'app-edit',
  templateUrl: './edit-article.component.html',
  styleUrls:['./edit-article.component.css']
})

export class EditArticleComponent implements OnInit {
  article: FirebaseObjectObservable<any>;
  data: string;
  constructor(private as: ArticleService, private route:ActivatedRoute, private location: Location){}
  ngOnInit(): void {

    this.route.params.switchMap((params:Params)=>this.as.getArticle(params['id'])).subscribe(article => this.article=article);
    console.log(this.article);

  }


  edit() {
    this.article.subscribe(article =>{
      console.log(article)
    })
    //this.article.update({articleData: })
  }

  goBack(){
    this.location.back();
  }


}

