import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAlbumRoutingModule } from './create-album-routing.module';
import { CreateAlbumComponent } from './create-album.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateAlbumComponent,
  ],
  imports: [
    CommonModule,
    CreateAlbumRoutingModule,
    ReactiveFormsModule,
  ],
})
export class CreateAlbumModule {
}
