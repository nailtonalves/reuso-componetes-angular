import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilhoComponent } from './filho.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilhoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    FilhoComponent
  ]
})
export class FilhoModule { }
