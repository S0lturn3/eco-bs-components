import { TestBed } from '@angular/core/testing';

import { EcoBsComponentsService } from './eco-bs-components.service';

describe('EcoBsComponentsService', () => {
  let service: EcoBsComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcoBsComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
