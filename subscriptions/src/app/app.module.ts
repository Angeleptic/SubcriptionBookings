import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { BookingComponent } from './booking/booking.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { SubscriptionStatusComponent } from './subscription-status/subscription-status.component';
import { BookingService } from './shared/booking.service';
import { ClientComponent } from './client/client.component';
import { BookingSlotComponent } from './booking-slot/booking-slot.component';
import { BookingTypeComponent } from './booking-type/booking-type.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    BookingComponent,
    BookingStatusComponent,
    SubscriptionStatusComponent,
    ClientComponent,
    BookingSlotComponent,
    BookingTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
