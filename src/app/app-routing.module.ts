import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./components/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'uploading-image',
    loadChildren: () => import('./components/uploading-image/uploading-image.module').then(m => m.UploadingImageModule)
  },
  {
    path: 'creating-album',
    loadChildren: () => import('./components/creating-album/creating-album.module').then(m => m.CreatingAlbumModule)
  }
  ,
  {
    path: 'settings',
    loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
