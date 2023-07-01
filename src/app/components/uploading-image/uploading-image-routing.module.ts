import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from "../gallery/gallery.component";
import {UploadingImageComponent} from "./uploading-image.component";

const routes: Routes = [
  {
    path: '',
    component: UploadingImageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadingImageRoutingModule { }
