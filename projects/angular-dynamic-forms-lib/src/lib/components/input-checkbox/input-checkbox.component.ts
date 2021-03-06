import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Interfaces
import { IConfiguration } from '../../interfaces/configuration.interface';

// Enumerations
import { VisibilityState } from '../../enumerations/visibility-state.enum';

@Component({
  selector: 'input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {

  // Inputs
  @Input() form: FormGroup;
  @Input() input: IConfiguration;

  // Public properties
  public VisibilityState: any;

  constructor() {
    this.VisibilityState = VisibilityState;
  }
  ngOnInit() {
    console.log(this.input);
  }

}
