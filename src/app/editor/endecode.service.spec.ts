import { TestBed, inject } from '@angular/core/testing';

import { EndecodeService } from './endecode.service';

describe('EndecodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndecodeService]
    });
  });

  it('should be created', inject([EndecodeService], (service: EndecodeService) => {
    expect(service).toBeTruthy();
  }));
});
