import { Component } from '@angular/core';

// Intefaces
import { IConfiguration } from 'angular-dynamic-forms-lib';

// Enumerations
import { ElementType } from 'angular-dynamic-forms-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public configuration: IConfiguration = {
    firstName: {
      name: 'First Name',
      type: ElementType.TEXT
    },
    lastName: {
      name: 'Last Name',
      type: ElementType.TEXT
    }
  };
}
