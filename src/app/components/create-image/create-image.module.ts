import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateImageRoutingModule } from './create-image-routing.module';
import { CreateImageComponent } from './create-image.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateImageComponent,
  ],
  imports: [
    CommonModule,
    CreateImageRoutingModule,
    ReactiveFormsModule,
  ],
})
export class CreateImageModule {
}
