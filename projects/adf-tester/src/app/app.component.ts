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
  public configuration: IConfiguration[] = [
    {
      id: 'firstName',
      name: 'First Name',
      type: ElementType.TEXT
    },
    {
      id: 'lastName',
      name: 'Last Name',
      type: ElementType.TEXT
    },
    {
      id: 'rememberMe',
      name: 'Remember Me',
      type: ElementType.CHECKBOX
    },
    {
      id: 'profession',
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
    },
    {
      id: 'level',
      name: 'Level',
      type: ElementType.RADIO,
      options: [
        {
          name: 'Junior Level',
          value: 'juniorLevel'
        },
        {
          name: 'Mid Level',
          value: 'midLevel'
        },
        {
          name: 'Senior Level',
          value: 'seniorLevel'
        }
      ]
    }
  ];
}
