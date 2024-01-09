import { TestBed } from '@angular/core/testing';

import { ComponentsharingService } from './componentsharing.service';

describe('ComponentsharingService', () => {
  let service: ComponentsharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
