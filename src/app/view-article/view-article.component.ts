/**
 * Created by dylan on 3/8/17.
 */
import 'rxjs/add/operator/switchMap';
import {Component, OnInit, ElementRef, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FirebaseObjectObservable, AngularFire} from 'angularfire2';
import { ArticleService } from '../dashboard/article.service';
import {Location }  from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view-article.component.html',
  styleUrls:['./view-article.component.css']
})

export class ViewArticleComponent implements OnInit {

  article: FirebaseObjectObservable<any>;
  scrollUp;


  constructor(private as: ArticleService, private route:ActivatedRoute, private location: Location,private router:Router,private element: ElementRef){
    this.scrollUp = this.router.events.subscribe((path) => {
      element.nativeElement.scrollIntoView();
  })

  }



  ngOnInit(): void {

    var currentUser = JSON.parse(localStorage.getItem('currentArticle'));
    this.article= currentUser.anArticle;
  }

goBack(){
    this.location.back();
}
}
