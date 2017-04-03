/**
 * Created by dylan on 2/25/17.
 */
import {Component, Inject} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFire, FirebaseObjectObservable,FirebaseApp} from "angularfire2";
import * as firebase from "firebase";
import {Message} from "primeng/primeng";


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})


export class LoginComponent {
  user: FirebaseObjectObservable<any>;
  googleProvider;
    firebaseApp;
    msgs: Message[]=[];
    uid;
    exists;

  constructor(private af: AngularFire, private router: Router,@Inject(FirebaseApp) firebaseApp:any) {
      this.msgs=[];

      this.googleProvider = new firebase.auth.GoogleAuthProvider();
      this.googleProvider.addScope('profile');
      this.googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');
      this.googleProvider.setCustomParameters(
          {prompt:'select_account'}

      );
      this.firebaseApp = firebaseApp;


  }
    onSubmit(formData){
      console.log(formData.value);
        this.firebaseApp.auth().signInWithEmailAndPassword(formData.value.email,formData.value.password)
      .then(
        (result) => {
            this.uid = result.uid;
            //return  firebase.database().ref('/USERS/'+uid).once('value').then(function (snapshot) {
            // var isAuthor=snapshot.val().author;
            // console.log(snapshot);
        }).then(()=>{
            this.af.database.object('/USERS/'+this.uid).subscribe(user =>{
                console.log(user.author);
                let isAuthor=user.author;
                if (isAuthor==true){
                    this.router.navigate(['/dashboard']);
                }else{

                    this.af.auth.logout().then(
                        (success) => {
                            this.msgs = [];
                            this.msgs.push({severity:'error', summary:'Authentication Failed', detail:'You are not authorized to use this dashboard.'});
                        })
                }
            });
        })
        .catch((error)=>{
            var errorCode= error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            if(errorCode=="auth/user-not-found"){
                this.msgs = [];
                this.msgs.push({severity:'error', summary:'Authentication Failed', detail:'Please create an Account!'});
            }else if(errorCode=="auth/wrong-password"){
                this.msgs = [];
                this.msgs.push({severity:'error', summary:'Authentication Failed', detail:'Wrong Password was entered!'});
            }else if(errorCode=="auth/too-many-requests"){
                this.msgs = [];
                this.msgs.push({severity:'error', summary:'Authentication Failed', detail:'Server is experiencing technical difficulties, Please Try Again Later!'});
            }
        })
    }


    googleSignin($event){
        var that= this;
        this.firebaseApp.auth().signInWithPopup(this.googleProvider).then(function (result) {
            var user = firebase.auth().currentUser;

            if (user) {
                console.log(user.uid);
                that.uid= user.uid;
                determineUser();
            } else {
                // No user is signed in.
            }
        })
         .catch((error)=>{
            var errorCode= error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            if(errorCode=="auth/user-not-found"){
                this.msgs = [];
                this.msgs.push({severity:'error', summary:'Authentication Failed', detail:'Please create an Account!'});
            }else if(errorCode=="auth/wrong-password"){
                this.msgs = [];
                this.msgs.push({severity:'error', summary:'Authentication Failed', detail:'Wrong Password was entered!'});
            }else if(errorCode=="auth/too-many-requests"){
                this.msgs = [];
                this.msgs.push({severity:'error', summary:'Authentication Failed', detail:'Server is experiencing technical difficulties, Please Try Again Later!'});
            }
        });

        function determineUser(){
            that.af.database.object('/USERS/'+that.uid).subscribe(user =>{
                console.log(user.author);

                if(user.uid!=that.uid){
                    that.exists=0;
                }

                let isAuthor= user.author;
                if(isAuthor==true){
                    that.router.navigate(['/dashboard']);
                }
                else{
                    if(that.exists==0){
                        var user1 = firebase.auth().currentUser;

                        user1.delete().then(function() {
                            that.msgs = [];
                            that.msgs.push({severity:'error', summary:'Authentication Failed', detail:'You are not authorized to use this dashboard.'});
                        }, function(error) {
                            // An error happened.
                        });
                    }else{
                        that.af.auth.logout().then(
                            () => {
                                that.msgs = [];
                                that.msgs.push({severity:'error', summary:'Authentication Failed', detail:'You are not authorized to use this dashboard.'});
                            })
                    }
                }
            })
        }
    }


  }

