import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public configuration: any = {
    firstName: {
      name: 'First Name',
      type: 'text'
    },
    lastName: {
      name: 'Last Name',
      type: 'text'
    }
  };
}
