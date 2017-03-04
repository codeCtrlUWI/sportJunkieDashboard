import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import{AddArticleComponent} from './add-article.component'


import {FileUploadModule} from 'primeng/primeng';
import {ImageService} from "angular2-image-upload/lib/image.service";


import { O2UploadToFbsComponent } from 'o2-upload-to-fbs';

@NgModule({
  imports: [
    FormsModule,
      BrowserModule,
  ],
  declarations:
      [AddArticleComponent,
      O2UploadToFbsComponent],

  providers: [
    ImageService,
  ],

  exports:[AddArticleComponent],
})
export class AddArticleModule { }
