import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import{AddArticleComponent} from './add-article.component'

import {MaterialModule} from "@angular/material";
import {InputTextareaModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import 'hammerjs';

<<<<<<< HEAD
=======
import {MaterialModule} from "@angular/material";
import {InputTextareaModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';

>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963



@NgModule({
  imports: [
    FormsModule,
      BrowserModule,
<<<<<<< HEAD
=======

>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963
      MaterialModule,
      InputTextareaModule,
      DialogModule,
      ButtonModule,
      GrowlModule,
  ],
  declarations:
      [AddArticleComponent],

  providers: [

  ],

  exports:[],
})
export class AddArticleModule { }
