import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadingImageRoutingModule } from './uploading-image-routing.module';
import { UploadingImageComponent } from './uploading-image.component';


@NgModule({
  declarations: [
    UploadingImageComponent
  ],
  imports: [
    CommonModule,
    UploadingImageRoutingModule
  ]
})
export class UploadingImageModule { }
