import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: []
})
export class ClientComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.resetform();
  }
  resetform(form?:NgForm){
    if(form=null){ 
      form.resetForm();
    }
   
    this.service.formData={
      Client_ID:null,
      Client_Name:'',
      Client_Surname:'',
      Client_Contact: '',
      Client_Height: 0,
      Date_of_Birth: '',
      Subscription_Balance: 0,
      Gender_ID: 0,
    }
  }


}
