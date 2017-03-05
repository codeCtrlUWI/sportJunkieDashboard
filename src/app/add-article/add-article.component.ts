import {Component, NgZone, Inject, EventEmitter, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseApp} from 'angularfire2';
import {Router} from "@angular/router";
import * as firebase from "firebase";
import { UUID } from 'angular2-uuid';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})

export class AddArticleComponent{

  articles:FirebaseListObservable<any[]>;

    category;
    storage;
    path;
    storageref;
    imageLink;
    uid;
    file;
    progress;
    clicked;
    email;
    uuid;
    completed;
    showMessage;
    spinner;

    msgs: Message[] = [];




  constructor(private af:AngularFire, private router:Router, @Inject(FirebaseApp) firebaseApp:any) {

    this.articles = af.database.list('/ARTICLES');


      this.af.auth.subscribe(authData => {
          console.log(authData);

          this.uid = authData.uid;
          this.email=authData.auth.email;
          this. uuid= UUID.UUID();
      });

      this.completed=false;
      this.clicked=false;
      this.showMessage=true;
      this.spinner=true;

      setTimeout(() => {
          this.msgs.push({severity:'success', summary:'Hooray', detail:'Upload Completed!'});
      }, 0);

  }


onChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];


};



UploadFile(){

    this.storage =firebase.storage().ref();
    this.path = "Profile Pictures/"+this.email+"-"+this.uid+"-"+this.uuid;
    this.storageref = this.storage.child(this.path);
    this.imageLink= "";

    var uploadTask = this.storageref.put(this.file);
    var that= this;


    uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        that.progress= progress;
        that.spinner=true;
        that.showMessage=true;
        if (progress==100){
            that.completed=true;
                that.spinner=false;

            setTimeout(function () {
                that.showMessage=false;
                that.completed=false;
            },3000);
        }
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
        }
    }, function(error) {
        // Handle unsuccessful uploads
    }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        var imglink = uploadTask.snapshot.downloadURL;
        console.log(imglink);
        that.imageLink= imglink;
    });
}



  onSubmit(this, formData:any, event:Event)
  {
    event.preventDefault();
    this.articles.push({
      title: formData.value.title,
      authorUID: this.uid,
      imageURL: this.imageLink,
      category: this.category,
      data: formData.value.data,
      subTitle: formData.value.subTitle,
    });
  }


  setClicked(this,event:Event){
        this.clicked= true;
    }

    categoryChange(this,dropdown){
        this.category= dropdown.value;
    }

    changeCompleted(){
        this.completed=false;
    }


}










