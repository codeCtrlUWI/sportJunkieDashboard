import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import{AddArticleComponent} from './add-article.component'


import {FileUploadModule} from 'primeng/primeng';
import {ProgressBarModule} from 'primeng/primeng';




@NgModule({
  imports: [
    FormsModule,
      BrowserModule,
      FileUploadModule,
      ProgressBarModule,
  ],
  declarations:
      [AddArticleComponent],

  providers: [

  ],

  exports:[AddArticleComponent],
})
export class AddArticleModule { }
