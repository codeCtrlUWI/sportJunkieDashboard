import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule, AuthMethods, AuthProviders}  from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { DashModule} from './dashboard/dashboard.module';
//import { QuillModule } from 'ngx-quill';
import {PanelModule} from 'primeng/primeng';
import {AuthGuard} from "./auth/auth-guard.service";
import {ModalModule} from 'angular2-modal';
import {GrowlModule} from 'primeng/primeng';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';




export const firebaseConfig = {
  apiKey: "AIzaSyCk_oQCj08uydAWGPGDi6lGDKmhrJuBtAQ",
  authDomain: "official-sjapp.firebaseapp.com",
  databaseURL: "https://official-sjapp.firebaseio.com",
  storageBucket: "official-sjapp.appspot.com",
  messagingSenderId: "800945379816"
};

export const firebaseAuthConfig ={
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

export const GoogleAuthConfig={
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
              ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(firebaseConfig,GoogleAuthConfig),
    MaterialModule.forRoot(),
    ButtonModule,
    PanelModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    //QuillModule,
    InputTextModule,
    DashModule,
    LoginRoutingModule,
    AppRoutingModule,
      GrowlModule


  ],
  exports: [
              ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
