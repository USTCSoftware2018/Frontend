import { TestBed, inject } from '@angular/core/testing';

import { ReportServiceService } from './report-service.service';

describe('ReportServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportServiceService]
    });
  });

  it('should be created', inject([ReportServiceService], (service: ReportServiceService) => {
    expect(service).toBeTruthy();
  }));
});
