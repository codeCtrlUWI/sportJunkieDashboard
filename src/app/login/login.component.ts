/**
 * Created by dylan on 2/25/17.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFire, FirebaseObjectObservable,FirebaseApp} from "angularfire2";
import * as firebase from "firebase";


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})


export class LoginComponent {
  user: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire, private router: Router) {


  }
    onSubmit(formData){
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);
          this.af.auth.subscribe(authData => {
            console.log(authData);

            let uid=authData.uid;


          //return  firebase.database().ref('/USERS/'+uid).once('value').then(function (snapshot) {
           // var isAuthor=snapshot.val().author;
           // console.log(snapshot);
           this.af.database.object('/USERS/'+uid).subscribe(user =>{
             console.log(user.author);
             let isAuthor=user.author;
             if (isAuthor==true){
               this.router.navigate(['/dashboard']);
             }
             else {
               this.af.auth.logout().then(
                 (success) => {
                   this.router.navigate(['/login']);
                   this.af.auth.unsubscribe();
                   window.location.reload();
                 })
             }

                       })
           // let usr=firebase.database().ref('/USERS/'+uid);
            //console.log(usr);


          })

        }).catch(
        (err) => {
          console.log(err);
          this.router.navigate(['/login']);
        })
    }
  }

