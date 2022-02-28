import { TestBed } from '@angular/core/testing';

import { ApiGouvCommunesService } from './api-gouv-communes.service';

describe('ApiGouvCommunesService', () => {
  let service: ApiGouvCommunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGouvCommunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
