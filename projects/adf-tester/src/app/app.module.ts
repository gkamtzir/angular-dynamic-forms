import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom Modules.
import { AngularDynamicFormsLibModule } from 'angular-dynamic-forms-lib';

// Components.
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularDynamicFormsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
