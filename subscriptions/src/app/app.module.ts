import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { BookingComponent } from './booking/booking.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { SubscriptionStatusComponent } from './subscription-status/subscription-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    BookingComponent,
    BookingStatusComponent,
    SubscriptionStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
