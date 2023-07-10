import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateImageComponent } from './create-image.component';

const routes: Routes = [
  {
    path: '',
    component: CreateImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateImageRoutingModule {
}
