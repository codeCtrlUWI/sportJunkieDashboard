/**
 * Created by dylan on 2/26/17.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import {DataScrollerModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';

import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@angular/material';
import { DashRoutingModule} from './dashboard-routing.module';
import {AuthGuard} from "../auth/auth-guard.service";

import {AddArticleModule} from "../add-article/add-article.module"


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    MaterialModule,
    DataScrollerModule,
      AddArticleModule,
    //DashRoutingModule,
      ],

  exports: [
    DashboardComponent,

  ],

  providers: [
    AuthGuard
  ],

  declarations: [
    DashboardComponent
  ]
})

export class DashModule { }



