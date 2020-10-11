import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Interfaces
import { IConfiguration } from '../../interfaces/configuration.interface';

// Enumerations
import { VisibilityState } from '../../enumerations/visibility-state.enum';

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {

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
