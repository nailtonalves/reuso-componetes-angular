import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FilhoModule } from 'src/app/shared/components/filho/filho.module';
import { PaiComponent } from './pai.component';
import { PaiRoutingModule } from './pai-routing.module';

@NgModule({
  declarations: [
    PaiComponent,
  ],
  imports: [
    CommonModule,
    PaiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FilhoModule
  ],

})
export class PaiModule { }
