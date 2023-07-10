import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlbumComponent } from './create-album.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAlbumComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAlbumRoutingModule {
}
