import { TestBed, inject } from '@angular/core/testing';

import { KurumiServiceService } from './kurumi-service.service';

describe('KurumiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KurumiServiceService]
    });
  });

  it('should be created', inject([KurumiServiceService], (service: KurumiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
