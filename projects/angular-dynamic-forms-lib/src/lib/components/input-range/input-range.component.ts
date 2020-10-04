import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Interfaces
import { IConfiguration } from '../../interfaces/configuration.interface';

// Enumerations
import { VisibilityState } from '../../enumerations/visibility-state.enum';

@Component({
  selector: 'input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.scss']
})
export class InputRangeComponent implements OnInit {

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
