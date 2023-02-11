import { TestBed } from '@angular/core/testing';

import { RoleAccessMapService } from './role-access-map.service';

describe('RoleAccessMapService', () => {
  let service: RoleAccessMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleAccessMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
