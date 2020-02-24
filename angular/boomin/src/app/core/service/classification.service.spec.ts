import { TestBed } from '@angular/core/testing';

import { AcmePublicServices } from './acme-public-services.service';

describe('ClassificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcmePublicServices = TestBed.get(AcmePublicServices);
    expect(service).toBeTruthy();
  });
});
