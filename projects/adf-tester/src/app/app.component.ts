import { Component } from '@angular/core';

// Intefaces
import { IConfiguration, ValidationType } from 'angular-dynamic-forms-lib';

// Enumerations
import { ElementType, VisibilityState } from 'angular-dynamic-forms-lib';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }

  public configuration: IConfiguration[] = [
    {
      id: 'firstName',
      name: 'FIRST_NAME',
      type: ElementType.TEXT,
      validations: [
        {
          type: ValidationType.REQUIRED
        },
        {
          type: ValidationType.MAX_LENGTH,
          value: '40'
        },
        {
          type: ValidationType.MIN_LENGTH,
          value: '2'
        }
      ],
      visibility: VisibilityState.VISIBLE
    },
    {
      id: 'lastName',
      name: 'LAST_NAME',
      type: ElementType.TEXT,
      validations: [
        {
          type: ValidationType.REQUIRED
        },
        {
          type: ValidationType.MAX_LENGTH,
          value: '40'
        }
      ],
      visibility: VisibilityState.VISIBLE
    },
    {
      id: 'age',
      name: 'AGE',
      type: ElementType.NUMBER,
      validations: [
        {
          type: ValidationType.REQUIRED
        },
        {
          type: ValidationType.MAX,
          value: '100'
        },
        {
          type: ValidationType.MIN,
          value: '18'
        }
      ],
      visibility: VisibilityState.VISIBLE
    },
    {
      id: 'rememberMe',
      name: 'REMEMBER_ME',
      type: ElementType.CHECKBOX,
      visibility: VisibilityState.VISIBLE
    },
    {
      id: 'profession',
      name: 'PROFESSION',
      type: ElementType.SELECT,
      options: [
        {
          name: 'SOFTWARE_ENGINEER',
          value: 'softwareEngineer'
        },
        {
          name: 'DEV_OPS',
          value: 'devOps'
        },
        {
          name: 'TESTER',
          value: 'tester'
        }
      ],
      visibility: VisibilityState.DISABLED
    },
    {
      id: 'level',
      name: 'LEVEL',
      type: ElementType.RADIO,
      options: [
        {
          name: 'JUNIOR_LEVEL',
          value: 'juniorLevel'
        },
        {
          name: 'MID_LEVEL',
          value: 'midLevel'
        },
        {
          name: 'SENIOR_LEVEL',
          value: 'seniorLevel'
        }
      ],
      visibility: VisibilityState.VISIBLE
    },
    {
      id: 'salary',
      name: 'Salary',
      type: ElementType.RANGE,
      visibility: VisibilityState.HIDDEN
    },
    {
      id: 'birthday',
      name: 'Birthday',
      type: ElementType.DATE,
      visibility: VisibilityState.VISIBLE
    },
  ];
}
