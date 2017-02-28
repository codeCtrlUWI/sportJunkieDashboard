/**
 * Created by dylan on 2/26/17.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '@angular/material';
import {DashModule} from "../dashboard/dashboard.module";

@NgModule({
  imports:[
    LoginRoutingModule,
    FormsModule,
    MaterialModule,
    DashModule
  ],

  exports: [
    LoginComponent,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginModule { }


