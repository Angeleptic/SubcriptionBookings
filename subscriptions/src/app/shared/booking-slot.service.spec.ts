import { TestBed } from '@angular/core/testing';

import { BookingSlotService } from './booking-slot.service';

describe('BookingSlotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingSlotService = TestBed.get(BookingSlotService);
    expect(service).toBeTruthy();
  });
});
