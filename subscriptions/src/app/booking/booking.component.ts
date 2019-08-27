import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared/booking.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styles: []
})
export class BookingComponent implements OnInit {

  constructor(private service: BookingService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(form?:NgForm){
    if(form=null){ 
      form.resetForm();
    }
   
    this.service.formData={
      Booking_ID:null,
      Booking_Type_ID:0,
      Booking_Status_ID:0
    }
  }
}
