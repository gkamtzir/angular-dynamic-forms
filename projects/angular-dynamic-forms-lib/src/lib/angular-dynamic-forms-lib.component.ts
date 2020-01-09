import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

// Intefaces
import { IConfiguration } from './interfaces/configuration.interface';
import { IValidation } from './interfaces/validation.interface';

// Enumerations
import { ElementType } from './enumerations/element-type.enum';
import { ValidationType } from './enumerations/validation-type.enum';

@Component({
  selector: 'angular-dynamic-forms',
  templateUrl: 'angular-dynamic-forms-lib.html',
  styleUrls: ['./angular-dynamic-forms-lib.scss']
})
export class AngularDynamicFormsLibComponent implements OnInit {

  @Input('configuration') configuration: IConfiguration[];

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

    for (const field of this.configuration) {
      if (!(field.id != null)) {
        console.error(`Duplicate id has been found. Id '${field.id}' has been used more than once.`);
      }

      // Setting validators.
      if (field.validations != null) {
        object[field.id] = ['', this.setValidators(field.validations)];
      } else {
        object[field.id] = [''];
      }
    }
    console.log(object);

    this.form = this.formBuilder.group(object);

    // Watching for changes.
    this.form.valueChanges.subscribe(val => {
      console.log(val);
      console.log(this.form.errors);
    });

    this.form.statusChanges.subscribe(val => {
      console.log(val);
    });
  }

  /**
   * Tracks each individual item of a list which is
   * used in an *ngFor directive to prevent unnecessary
   * DOM manipulations.
   * @param index The index of the item in the array.
   * @param item The actual item of the array.
   */
  public trackByFn(index, item): number {
    return index;
  }

  /**
   * Converts the configuration's validation rules to
   * angular form's validation rules.
   * @param validations The validation array.
   */
  private setValidators(validations: IValidation[]): ValidatorFn[] {
    const validationRules: ValidatorFn[] = [];

    for (const validation of validations) {
      switch (validation.type) {
        case ValidationType.MAX:
          validationRules.push(Validators.max(parseInt(validation.value)));
          break;
        case ValidationType.MIN:
          validationRules.push(Validators.min(parseInt(validation.value)));
          break;
        case ValidationType.MAX_LENGTH:
          validationRules.push(Validators.maxLength(parseInt(validation.value)));
          break;
        case ValidationType.MIN_LENGTH:
          validationRules.push(Validators.minLength(parseInt(validation.value)));
          break;
        case ValidationType.REQUIRED:
          validationRules.push(Validators.required);
          break;
        case ValidationType.REGEX:
          validationRules.push(Validators.pattern(validation.value));
          break;
      }
    }

    return validationRules;
  }
}
