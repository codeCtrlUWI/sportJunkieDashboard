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
  constructor(private as: ArticleService, private route:ActivatedRoute, private location: Location,private af: AngularFire){

    var currentUser = JSON.parse(localStorage.getItem('currentArticle'));
    this.article= currentUser.anArticle;
  }




  ngOnInit(): void {

    var currentUser = JSON.parse(localStorage.getItem('currentArticle'));
    this.article= currentUser.anArticle;

  }


  onSubmit(formData) {
    console.log(formData.value);
    this.data=formData.value.articleText;
    console.log(this.data);
    this.route.params.subscribe(params =>{
      this.af.database.object("/ARTICLES/"+params['id']).update({articleData:this.data})
    });

    //add confirmation popup and error handling




  }



  goBack(){
    this.location.back();
  }


}

