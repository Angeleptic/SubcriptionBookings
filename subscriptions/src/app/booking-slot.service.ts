import { Injectable } from '@angular/core';
import { BookingSlot } from './booking-slot.model';

@Injectable({
  providedIn: 'root'
})
export class BookingSlotService {
  formData: BookingSlot;
  constructor() { }
}
