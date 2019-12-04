import { NgModule } from '@angular/core';
import { AngularDynamicFormsLibComponent } from './angular-dynamic-forms-lib.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AngularDynamicFormsLibComponent],
  imports: [
    ReactiveFormsModule
  ],
  exports: [AngularDynamicFormsLibComponent]
})
export class AngularDynamicFormsLibModule { }
