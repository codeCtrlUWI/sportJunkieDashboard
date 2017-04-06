/**
 * Created by dylan on 3/8/17.
 */
import 'rxjs/add/operator/switchMap';
import {Component, OnInit, ElementRef, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FirebaseObjectObservable, AngularFire} from 'angularfire2';
import { ArticleService } from '../dashboard/article.service';
import {Location }  from '@angular/common';
import * as firebase from 'firebase';
declare var $: any;
declare var Galleria: any;
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view-article.component.html',
  styleUrls:['./view-article.component.css']
})

export class ViewArticleComponent implements OnInit {

  article: FirebaseObjectObservable<any>;
  galleryID;
  articleID;
  scrollUp;
  galleryImages: FirebaseObjectObservable<any>;
  images: any[];
  showGallery=1;


  constructor(private af:AngularFire, private as: ArticleService, private route:ActivatedRoute, private location: Location,private element: ElementRef, private router:Router, private cdr:ChangeDetectorRef){
    this.scrollUp = this.router.events.subscribe((path) => {
      element.nativeElement.scrollIntoView();
  })

  }



  ngOnInit(){

    var currentUser = JSON.parse(localStorage.getItem('currentArticle'));
    this.article= currentUser.anArticle;
    console.log(this.article);
    for(var i in this.article){
      //if (i=='galleryID'){
      //  this.galleryID=this.article[i];
      //  console.log(this.galleryID)
     // }
      if(i=='articleID'){
        this.articleID= this.article[i];
      }

    }
    var currentUser = JSON.parse(localStorage.getItem('articleImages'));
    this.images= currentUser.articleImageDem;

    var galleryIDS= firebase.database().ref('/ARTICLES/'+this.articleID+'/galleryID');
    galleryIDS.once('value').then(snapshotter=>{
      var images=[];
      var galleryRef= firebase.database().ref('/GALLERY/'+snapshotter.val());
      galleryRef.once('value').then(snapshots=>{
        snapshots.forEach(snapshot=>{
          images.push(snapshot.val());
          console.log(snapshot.val());
        })
      }).then(()=>{
        if(images!=null){
          this.images=images;
          this.as.setArticleImages(images);
        }
        Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.5/themes/classic/galleria.classic.min.js');
        Galleria.configure({
          lightbox: true,
          transition: 'fade',
          autoplay: 4000
        });
        Galleria.run('.galleria');
        if(images.length==0){
          this.showGallery=0;
        }
      });





  });
  }

goBack(){
    this.location.back();
}
}
