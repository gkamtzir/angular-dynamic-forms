import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// Intefaces
import { IConfiguration } from './interfaces/configuration.interface';

// Enumerations
import { ElementType } from './enumerations/element-type.enum';

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
      object[field.id] = [''];
    }

    this.form = this.formBuilder.group(object);

    // Watching for changes.
    this.form.valueChanges.subscribe(val => {
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

}
