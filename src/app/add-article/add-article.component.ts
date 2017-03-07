import {Component, NgZone, Inject, EventEmitter, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseApp, FirebaseObjectObservable} from 'angularfire2';
import {Router} from "@angular/router";
import * as firebase from "firebase";
import { UUID } from 'angular2-uuid';
import {Message} from 'primeng/primeng';
<<<<<<< HEAD
import {Location} from '@angular/common'
=======
import { Location } from '@angular/common';

>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963

@Component({
    selector: 'app-add-article',
    templateUrl: './add-article.component.html',
    styleUrls: ['./add-article.component.css'],
})

export class AddArticleComponent{

<<<<<<< HEAD
    articles:FirebaseListObservable<any[]>;
    users:FirebaseListObservable<any[]>;
    user: FirebaseObjectObservable<any>;
    articleObject:FirebaseObjectObservable<any>;



    numberOfClicks;
=======
  articles:FirebaseListObservable<any[]>;

>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963
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
<<<<<<< HEAD
    firstName;
    lastName;
    newObject;
    angularFireState;
=======

    msgs: Message[] = [];
>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963

    msgs: Message[] = [];

<<<<<<< HEAD
=======


  constructor(private location: Location,private af:AngularFire, private router:Router, @Inject(FirebaseApp) firebaseApp:any) {
>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963



    constructor(private location:Location, private af:AngularFire, private router:Router, @Inject(FirebaseApp) firebaseApp:any) {

        this.articles = af.database.list('/ARTICLES');

<<<<<<< HEAD
        this.numberOfClicks=0;
=======
      this.completed=false;
      this.clicked=false;
      this.showMessage=true;
      this.spinner=true;

      setTimeout(() => {
          this.msgs.push({severity:'success', summary:'Hooray', detail:'Upload Completed!'});
      }, 0);

  }
>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963


        this.af.auth.subscribe(authData => {

            this.uid = authData.uid;
            this.email=authData.auth.email;
            this. uuid= UUID.UUID();
        });

        this.users= af.database.list('/USERS',{
            preserveSnapshot:true,
            query:{
                orderByChild:'uid',
                equalTo:this.uid,
            },

        });

        this.angularFireState= af;


<<<<<<< HEAD
        this.users
            .subscribe(snapshots=>{
                snapshots.forEach(snapshot=>{
                    let specificUser =snapshot.key;
                    this.user= this.af.database.object('/USERS/'+specificUser,{
                        preserveSnapshot:true
                    });
                    this.user.subscribe(snapshot => {
                        this.firstName= snapshot.val().firstName;
                        this.lastName= snapshot.val().lastName;
                    });
                })
            });
=======
    this.storage =firebase.storage().ref();
    this.path = "Profile Pictures/"+this.email+"-"+this.uid+"-"+this.uuid;
    this.storageref = this.storage.child(this.path);
    this.imageLink= "";
>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963



<<<<<<< HEAD
=======
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
>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963

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

<<<<<<< HEAD
=======
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
>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963


    onSubmit(this, formData:any, event:Event,)
    {
        event.preventDefault();
        this.newObject= this.articles.push({
            title: formData.value.title,
            authorUID: this.uid,
            urlToImage: this.imageLink,
            category: this.category,
            articleData: formData.value.data,
            subtitle: formData.value.subTitle,
            authorFname: this.firstName,
            authorLname: this.lastName,
            timeAndDateCreated: Date.now(),
            lastUpdated: "Today",
            numberOfClicks: this.numberOfClicks,
        }).then
        (
            (item)=>{
                console.log(item.key);
                const itemkey= item.key;
                this.articleObject= this.angularFireState.database.object('/ARTICLES/'+itemkey);
                this.articleObject.update({articleID:itemkey});

            });
    }


    setClicked(this,event:Event){
        this.clicked= true;
    }

    categoryChange(this,dropdown){
        this.category= dropdown.value;
    }
<<<<<<< HEAD

    changeCompleted(){
        this.completed=false;
    }

  goBack(){
    this.location.back();
  }

=======
>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963

    changeCompleted(){
        this.completed=false;
    }
  goBack(){
    this.location.back();
  }
}










