/**
 * Created by dylan on 2/26/17.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports:[
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginModule { }


