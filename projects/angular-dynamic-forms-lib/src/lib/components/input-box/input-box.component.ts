import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Interfaces
import { IConfiguration } from '../../interfaces/configuration.interface';

// Enumerations
import { VisibilityState } from '../../enumerations/visibility-state.enum';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {

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
