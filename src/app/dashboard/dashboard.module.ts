/**
 * Created by dylan on 2/26/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { EditorModule, SharedModule } from 'primeng/primeng';

import {DataScrollerModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';

import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@angular/material';
import { DashRoutingModule} from './dashboard-routing.module';
import {AuthGuard} from "../auth/auth-guard.service";
import { CKEditorModule } from 'ng2-ckeditor';
import {AddArticleModule} from "../add-article/add-article.module"
import { ListArticleComponent } from '../list-article/list-article.component';
import { ViewArticleComponent } from '../view-article/view-article.component';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import {InputTextareaModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import { ArticleService } from './article.service';



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
    ButtonModule,
    EditorModule,
    SharedModule,
    CKEditorModule,
    DataScrollerModule,
    DashRoutingModule
      ],

  exports: [
    //AddArticleModule,
    //ListArticleComponent
  ],

  providers: [
    AuthGuard,
    ArticleService
  ],

  declarations: [
    DashboardComponent,
    ListArticleComponent,
    AddArticleComponent,
    ViewArticleComponent,
    EditArticleComponent


  ]
})

export class DashModule { }



