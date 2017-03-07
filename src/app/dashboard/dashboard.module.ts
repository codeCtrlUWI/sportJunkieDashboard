/**
 * Created by dylan on 2/26/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {DataScrollerModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';

import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@angular/material';
import { DashRoutingModule} from './dashboard-routing.module';
import {AuthGuard} from "../auth/auth-guard.service";

import {AddArticleModule} from "../add-article/add-article.module"
import { ListArticleComponent } from '../list-article/list-article.component';


import {InputTextareaModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';



import {AddArticleComponent} from "../add-article/add-article.component";
@NgModule({
  imports:[
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextareaModule,
    MaterialModule.forRoot(),
    DialogModule,
    GrowlModule,
    DataScrollerModule,
<<<<<<< HEAD
    DashRoutingModule,
      ButtonModule
=======
    DashRoutingModule
>>>>>>> 19a749548bb406fa2ea81785ea4a582ec878f963
      ],

  exports: [
    //AddArticleModule,
    //ListArticleComponent
  ],

  providers: [
    AuthGuard
  ],

  declarations: [
    DashboardComponent,
    ListArticleComponent,
    AddArticleComponent


  ]
})

export class DashModule { }



