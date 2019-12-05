import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// Enumerations
// import { }

@Component({
  selector: 'angular-dynamic-forms',
  templateUrl: 'angular-dynamic-forms-lib.html',
  styles: []
})
export class AngularDynamicFormsLibComponent implements OnInit {

  @Input('configuration') configuration: any[];

  // Public properties
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
  }

}
