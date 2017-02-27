/**
 * Created by dylan on 2/25/17.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  constructor(private af: AngularFire, private router: Router) { }
    onSubmit(formData){
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/dashboard']);
        }).catch(
        (err) => {
          console.log(err);
          this.router.navigate(['/error']);
        })
    }
  }

