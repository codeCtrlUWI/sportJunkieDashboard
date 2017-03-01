import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule, AuthMethods, AuthProviders}  from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { LoginModule } from './login/login.module';
import { DashModule } from './dashboard/dashboard.module';
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

      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule,
    LoginModule,
    DashModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
