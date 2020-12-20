import { TestBed } from '@angular/core/testing';

import { NgxJakaService } from './ngx-jaka.service';

describe('NgxJakaService', () => {
  let service: NgxJakaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxJakaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
