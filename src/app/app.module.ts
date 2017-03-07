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


import {AuthGuard} from "./auth/auth-guard.service";





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
}


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
    MaterialModule.forRoot(),
    ButtonModule,
    InputTextModule,
    DashModule,
    LoginRoutingModule,
    AppRoutingModule


  ],
  exports: [
              ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
