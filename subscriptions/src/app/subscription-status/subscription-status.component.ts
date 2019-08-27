import { Component, OnInit } from '@angular/core';
import { SubscriptionStatusService } from '../shared/subscription-status.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscription-status',
  templateUrl: './subscription-status.component.html',
  styles: []
})
export class SubscriptionStatusComponent implements OnInit {

  constructor(private service: SubscriptionStatusService) { }

  ngOnInit() {
    this.resetform();
  }
  resetform(form?:NgForm){
    if(form=null){ 
      form.resetForm();
    }
   
    this.service.formData={
      Sub_Status_ID:null,
      Sub_Status_Desc:''
      
    }
  }
}
