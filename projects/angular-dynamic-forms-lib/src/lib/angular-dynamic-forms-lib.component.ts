import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// Intefaces
import { IConfiguration } from './interfaces/configuration.interface';

// Enumerations
import { ElementType } from './enumerations/element-type.enum';

@Component({
  selector: 'angular-dynamic-forms',
  templateUrl: 'angular-dynamic-forms-lib.html',
  styles: []
})
export class AngularDynamicFormsLibComponent implements OnInit {

  @Input('configuration') configuration: IConfiguration;

  // Public properties
  public form: FormGroup;
  public elementType: any;

  constructor(private formBuilder: FormBuilder) {
    this.elementType = ElementType;
   }

  ngOnInit() {
    this.initializeForm();
  }

  /**
   * Initializes the form.
   */
  private initializeForm(): void {
    let object: any = {};

    for (const prop of Object.keys(this.configuration)) {
      object[prop] = [''];
    }

    this.form = this.formBuilder.group(object);

    console.log(this.form);
  }

}
