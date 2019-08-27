import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Subcribtion } from './shared/subcribtion.model';
import { SubscriptionStatusComponent } from './subscription-status/subscription-status.component';
import { BookingComponent } from './booking/booking.component';
import { BookingStatus } from './shared/booking-status.model';
import { Client } from './client.model';

const routes: Routes = [
  {path:'',redirectTo:'client', pathMatch:'full'},
  {path :'booking', component:BookingComponent},
  {path :'Subscriptions', component:Subcribtion},
  {path :'Subscriptions-status', component:SubscriptionStatusComponent},
  {path :'booking-status', component:BookingStatus},
  {path: 'client', component:Client}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
