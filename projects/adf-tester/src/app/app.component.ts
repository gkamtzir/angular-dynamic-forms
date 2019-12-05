import { Component } from '@angular/core';

// Interfaces
import { IConfiguration } from './intefaces/configuration.interface';

// Enumerations
import { ElementType } from './enumerations/element-type.enum';

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
