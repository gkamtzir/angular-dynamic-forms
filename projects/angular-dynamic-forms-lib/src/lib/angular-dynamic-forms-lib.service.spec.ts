import { TestBed } from '@angular/core/testing';

import { AngularDynamicFormsLibService } from './angular-dynamic-forms-lib.service';

describe('AngularDynamicFormsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDynamicFormsLibService = TestBed.get(AngularDynamicFormsLibService);
    expect(service).toBeTruthy();
  });
});
