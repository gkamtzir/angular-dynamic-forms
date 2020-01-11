import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Interfaces
import { IConfiguration } from '../../interfaces/configuration.interface';

@Component({
  selector: 'input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements OnInit {

  // Inputs
  @Input() form: FormGroup;
  @Input() input: IConfiguration;

  constructor() { }

  ngOnInit() {
    console.log(this.input);
  }

}
