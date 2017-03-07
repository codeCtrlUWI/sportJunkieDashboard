/**
 * Created by dylan on 3/5/17.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import {MaterialModule} from "@angular/material";
import {InputTextareaModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';




@NgModule({
  imports: [
    FormsModule,
    BrowserModule,

    MaterialModule,
    InputTextareaModule,
    DialogModule,
    ButtonModule,
    GrowlModule,
  ],
  declarations:
    [],

  providers: [

  ],

  exports:[],
})
export class EditArticleModule { }

