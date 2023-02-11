import { TestBed } from '@angular/core/testing';

import { AccessObjectService } from './access-object.service';

describe('AccessObjectService', () => {
  let service: AccessObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
