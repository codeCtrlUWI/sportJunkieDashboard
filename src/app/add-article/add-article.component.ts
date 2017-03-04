import {Component, NgZone, Inject, EventEmitter, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseApp} from 'angularfire2';
import {Router} from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})

export class AddArticleComponent{


  articles:FirebaseListObservable<any[]>;

  storage;
  path;
  storageref;

  imageLink;


  file;

  firebase:any;

  state;

  constructor(private af:AngularFire, private router:Router, @Inject(FirebaseApp) firebaseApp:any) {

    this.articles = af.database.list('/ARTICLES');

    this.firebase= firebase;


  }


onChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];


  this.storage =firebase.storage().ref();
    this.path = "Profile Pictures/"+this.file.name;
    this.storageref = this.storage.child(this.path);
    this.imageLink= "booga";

    var uploadTask = this.storageref.put(this.file);

   var that= this;


      uploadTask.on('state_changed',null,null, function(this) {
       var imglink = uploadTask.snapshot.downloadURL;
        console.log(imglink);
        that.imageLink= imglink;
      }

  );



};


  onSubmit(this, formData:any, event:Event)
  {
    event.preventDefault();
    this.articles.push({
      title: formData.value.title,
      authorUID: this.af.auth.getAuth().uid,
      imageURL: this.imageLink,
      category: formData.value.category,
      data: formData.value.data,
      subTitle: formData.value.subTitle,
    });
  }
}











