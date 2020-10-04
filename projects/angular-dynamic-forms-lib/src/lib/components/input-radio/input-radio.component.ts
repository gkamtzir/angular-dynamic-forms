import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Interfaces
import { IConfiguration } from '../../interfaces/configuration.interface';

// Enumerations
import { VisibilityState } from '../../enumerations/visibility-state.enum';

@Component({
  selector: 'input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent implements OnInit {

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
