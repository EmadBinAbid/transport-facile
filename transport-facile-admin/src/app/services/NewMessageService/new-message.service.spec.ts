import { TestBed, inject } from '@angular/core/testing';

import { NewMessageService } from './new-message.service';

describe('NewMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewMessageService]
    });
  });

  it('should be created', inject([NewMessageService], (service: NewMessageService) => {
    expect(service).toBeTruthy();
  }));
});
