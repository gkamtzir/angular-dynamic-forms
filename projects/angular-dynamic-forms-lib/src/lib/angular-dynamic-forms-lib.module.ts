import { NgModule } from '@angular/core';
import { AngularDynamicFormsLibComponent } from './angular-dynamic-forms-lib.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AngularDynamicFormsLibComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [AngularDynamicFormsLibComponent]
})
export class AngularDynamicFormsLibModule { }
