import { Component, OnInit } from '@angular/core';
import { BookingSlotService } from '../booking-slot.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking-slot',
  templateUrl: './booking-slot.component.html',
  styles: []
})
export class BookingSlotComponent implements OnInit {

  constructor(private service: BookingSlotService) { }

  ngOnInit() {
    this.resetform();
  }
  resetform(form?:NgForm){
    if(form=null){ 
      form.resetForm();
    }
   
    this.service.formData={
      Booking_Slot_ID:null,
      Booking_Slot_Date:'',
      Booking_Slot_Start:'',
      Booking_Slot_End:'',
      Booking_Slot_Venue:''
    }
  }
}
