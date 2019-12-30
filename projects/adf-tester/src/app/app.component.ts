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
    },
    RememberMe: {
      name: 'Remember Me',
      type: ElementType.CHECKBOX
    },
    Profession: {
      name: 'Profession',
      type: ElementType.SELECT,
      options: [
        {
          name: 'Software Engineer',
          value: 'softwareEngineer'
        },
        {
          name: 'DevOps',
          value: 'devOps'
        },
        {
          name: 'Tester',
          value: 'tester'
        }
      ]
    }
  };
}
