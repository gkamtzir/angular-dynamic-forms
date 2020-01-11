import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from "@angular/common/http";

// Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// Components
import { AngularDynamicFormsLibComponent } from './angular-dynamic-forms-lib.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';

@NgModule({
  declarations: [
    AngularDynamicFormsLibComponent,
    InputBoxComponent,
    InputSelectComponent,
    InputCheckboxComponent,
    InputRadioComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [AngularDynamicFormsLibComponent]
})
export class AngularDynamicFormsLibModule { }
