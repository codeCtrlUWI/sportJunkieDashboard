import {Component, NgZone, Inject, EventEmitter, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseApp, FirebaseObjectObservable} from 'angularfire2';
import {Router} from "@angular/router";


import * as firebase from "firebase";
import { UUID } from 'angular2-uuid';
import {Message} from 'primeng/primeng';
import {Location} from '@angular/common';


@Component({
    selector: 'app-add-article',
    templateUrl: './add-article.component.html',
    styleUrls: ['./add-article.component.css'],
})

export class AddArticleComponent {

  articles: FirebaseListObservable<any[]>;
  galleries: FirebaseListObservable<any[]>
  users: FirebaseListObservable<any[]>;
  user: FirebaseObjectObservable<any>;
  articleObject: FirebaseObjectObservable<any>;
  galleryObject: FirebaseObjectObservable<any>;


  numberOfClicks;
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
  firstName;
  lastName;
  newObject;
  angularFireState;
  galleryId;
  gallery: any[] = [];
  fbGalleryLinks={};

  msgs: Message[] = [];


  constructor(private location: Location, private af: AngularFire, private router: Router, @Inject(FirebaseApp) firebaseApp: any) {

    this.articles = af.database.list('/ARTICLES');
    this.galleries = af.database.list('/GALLERY')

    this.numberOfClicks = 0;


    this.af.auth.subscribe(authData => {

      this.uid = authData.uid;
      this.email = authData.auth.email;
      this.uuid = UUID.UUID();
    });

    this.users = af.database.list('/USERS', {
      preserveSnapshot: true,
      query: {
        orderByChild: 'uid',
        equalTo: this.uid,
      },

    });

    this.angularFireState = af;


    this.users
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          let specificUser = snapshot.key;
          this.user = this.af.database.object('/USERS/' + specificUser, {
            preserveSnapshot: true
          });
          this.user.subscribe(snapshot => {
            this.firstName = snapshot.val().firstName;
            this.lastName = snapshot.val().lastName;
          });
        })
      });


    this.completed = false;
    this.clicked = false;
    this.showMessage = true;
    this.spinner = true;

    setTimeout(() => {
      this.msgs.push({severity: 'success', summary: 'Hooray', detail: 'Upload Completed!'});
    }, 0);

  }


  onChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];


  };

  onGallChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let tempGal: FileList = target.files;
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.gallery.push(e.target.result);
    }

    reader.readAsDataURL(target.files[0]);
    //this.gallery.push(tempGal[0])

    console.log(this.gallery)

    //
    // input.value = files.map(f => f.name).join(', ');
  }


  /*creatFBRef(fbLinks){
    let obj={};

     fbLinks.forEach(function(link,pos){
       obj[pos]=link;
     })



    console.log(fbLinks);
    console.log(obj);
    this.galleries.push(obj).then(
      (gallery)=>{
        console.log(gallery.key);
        this.galleryId=gallery.key;
      });

  }*/

  firebaseUploadTask(i,object){
    this.storage = firebase.storage().ref();
    this.path = "Article Images/" + this.email + "-" + this.uid + "-" + this.uuid+"-image"+i;
    this.storageref = this.storage.child(this.path);
    var that = this;
    var uploadTask = this.storageref.putString(this.gallery[i], 'data_url');

    uploadTask.on('state_changed', function (snapshot) {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      that.progress = progress;
      that.spinner = true;
      that.showMessage = true;
      if (progress == 100) {
        that.completed = true;
        that.spinner = false;

        setTimeout(function () {
          that.showMessage = false;
          that.completed = false;
        }, 3000);
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
    }, function (error) {
      // Handle unsuccessful uploads
    }, function () {

      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      var imglink = uploadTask.snapshot.downloadURL;
      console.log(imglink);
      object[i]=imglink;
      //arrToObj(i,obj,imglink)
      //console.log(obj)
      //newLinks.push(imglink);
    })
  }
  sendToFB(){
    let obj={};
    var newLinks=[];
    for (var i = 0; i < this.gallery.length; i++) {
      this.firebaseUploadTask(i,obj);
    }
    console.log(obj);
    this.galleries.push(obj).then(
      (gallery)=>{
        console.log(gallery.key);

        this.galleryId=gallery.key;

      });
    console.log(obj);
    this.fbGalleryLinks=obj;
    console.log(this.fbGalleryLinks);




  }




  uploadGallery() {
        this.sendToFB();






    /*let obj={};
    this.gallery.forEach(function(data,i){
      obj[i]=this.gallery[i]
    })
    console.log(obj)
    this.galleries.push(obj).then(
      (gallery)=>{
        console.log(gallery.key)
        this.galleryId=gallery.key;
      });
*/

  }


















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
            galleryID: this.galleryId,
        }).then
        (
            (item)=>{

                console.log(item.key);
                const itemkey= item.key;
                const galkey=this.galleryId
                console.log(this.galleryId)
                let updates={};
                updates['/GALLERY/'+this.galleryId]=this.fbGalleryLinks;
                firebase.database().ref().update(updates);
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

    changeCompleted(){
        this.completed=false;
    }

    goBack(){
        this.location.back();
    }



}










