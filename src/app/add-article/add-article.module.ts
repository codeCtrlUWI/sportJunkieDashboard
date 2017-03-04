import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import{AddArticleComponent} from './add-article.component'


import {FileUploadModule} from 'primeng/primeng';
import {ProgressBarModule} from 'primeng/primeng';
import {ImageService} from "angular2-image-upload/lib/image.service";



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
    ImageService,
  ],

  exports:[AddArticleComponent],
})
export class AddArticleModule { }
