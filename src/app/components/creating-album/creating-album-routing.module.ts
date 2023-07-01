import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatingAlbumComponent} from "./creating-album.component";

const routes: Routes = [
  {
    path: '',
    component: CreatingAlbumComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatingAlbumRoutingModule { }
