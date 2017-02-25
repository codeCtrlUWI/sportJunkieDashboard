import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule}  from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCvjY_1pbNlPw0PoGjHxOjSxTcu0gug09M',
  authDomain: 'sjapp-4c72a.firebaseapp.com',
  databaseURL: 'https://sjapp-4c72a.firebaseio.com',
  storageBucket: 'sjapp-4c72a.appspot.com',
  messagingSenderId: '242489775623'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
