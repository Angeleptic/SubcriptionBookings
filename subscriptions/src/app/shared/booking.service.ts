import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { BookingStatus } from './booking-status.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  formData: Booking;
  bookingStatus: BookingStatus[]; //incomplete
  constructor() { }
}
