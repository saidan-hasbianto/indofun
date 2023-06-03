import { TestBed } from '@angular/core/testing';

import { LogErrorHandleService } from './log-error-handle.service';

describe('LogErrorHandleService', () => {
  let service: LogErrorHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogErrorHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
