import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatingAlbumRoutingModule } from './creating-album-routing.module';
import { CreatingAlbumComponent } from './creating-album.component';


@NgModule({
  declarations: [
    CreatingAlbumComponent
  ],
  imports: [
    CommonModule,
    CreatingAlbumRoutingModule
  ]
})
export class CreatingAlbumModule { }
