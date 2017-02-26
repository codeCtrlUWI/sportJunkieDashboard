import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule, AuthMethods, AuthProviders}  from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { LoginModule } from './login/login.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyCvjY_1pbNlPw0PoGjHxOjSxTcu0gug09M',
  authDomain: 'sjapp-4c72a.firebaseapp.com',
  databaseURL: 'https://sjapp-4c72a.firebaseio.com',
  storageBucket: 'sjapp-4c72a.appspot.com',
  messagingSenderId: '242489775623'
};

export const firebaseAuthConfig ={
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AppRoutingModule,
    MaterialModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
