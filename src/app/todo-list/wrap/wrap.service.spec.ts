import { TestBed } from '@angular/core/testing';

import { WrapService } from './wrap.service';

describe('WrapService', () => {
  let service: WrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
