import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/gallery/gallery.module').then(m => m.GalleryModule),
  },
  {
    path: 'create-image',
    loadChildren: () => import('./components/create-image/create-image.module').then(m => m.CreateImageModule),
  },
  {
    path: 'create-album',
    loadChildren: () => import('./components/create-album/create-album.module').then(m => m.CreateAlbumModule),
  }
  ,
  {
    path: 'settings',
    loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
