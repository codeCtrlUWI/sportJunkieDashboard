import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import AuthProvider = firebase.auth.AuthProvider;

export const firebaseConfig = {
  apiKey: "AIzaSyCvjY_1pbNlPw0PoGjHxOjSxTcu0gug09M",
  authDomain: "sjapp-4c72a.firebaseapp.com",
  databaseURL: "https://sjapp-4c72a.firebaseio.com",
  storageBucket: "sjapp-4c72a.appspot.com",
  messagingSenderId: "242489775623"
};

const myFirebaseAuthConfig={
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig),
    NgbModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
