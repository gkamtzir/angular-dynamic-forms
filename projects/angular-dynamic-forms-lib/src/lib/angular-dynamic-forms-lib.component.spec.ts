import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDynamicFormsLibComponent } from './angular-dynamic-forms-lib.component';

describe('AngularDynamicFormsLibComponent', () => {
  let component: AngularDynamicFormsLibComponent;
  let fixture: ComponentFixture<AngularDynamicFormsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDynamicFormsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDynamicFormsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
