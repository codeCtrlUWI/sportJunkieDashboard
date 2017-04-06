/**
 * Created by dylan on 3/5/17.
 */
import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {Router} from "@angular/router";
import * as firebase from 'firebase';
import {ArticleService} from "../dashboard/article.service";



@Component({
  selector: 'list-article',
  templateUrl: './list-article.component.html',
  styleUrls:['./list-article.component.css'],
})

export class ListArticleComponent {
    articles;
    images;

  constructor(private af: AngularFire, private router: Router,private as:ArticleService) {

      var that= this;
    this.af.auth.subscribe(authData => {
        console.log(authData);

        let uid=authData.uid;

        var rArray=[];

        var articleref= firebase.database().ref('/MICRO-ARTICLES');
        articleref.orderByChild("authorUID").on("value",function(data) {
            rArray=[];
            data.forEach(function(snapshot) {
                if(snapshot.val().authorUID==uid){
                    let articleData= snapshot.val();
                    rArray.push(articleData);
                    return false;
                }
            });
            console.log(rArray);
            that.articles= rArray;
            that.articles.reverse();
            return false;
        });

      }

    );


  }
  addArticle(){
    this.router.navigate(['/dashboard/add']);
  }

  viewArticle(articleID){
      this.as.getArticle(articleID);
      var galleryIDS= firebase.database().ref('/ARTICLES/'+articleID+'/galleryID');
      galleryIDS.once('value').then(snapshotter=>{
          var images=[];
          var galleryRef= firebase.database().ref('/GALLERY/'+snapshotter.val());
          galleryRef.once('value').then(snapshots=>{
              snapshots.forEach(snapshot=>{
                  images.push(snapshot.val());
                  console.log(snapshot.val());
              })
          }).then(()=>{
              this.images=images;
              console.log(this.images.length);
              console.log(images.length);
              this.as.setArticleImages(images);
          }).then(()=>{
              this.router.navigate(['dashboard/view/',articleID]);
          })

      })
  }

  editArticle(articleId) {
      this.as.getArticle(articleId);
    this.router.navigate(['/dashboard/edit', articleId]);
  }

  scoreBoard(){
    this.router.navigate(['/dashboard/score']);
  }


 }
