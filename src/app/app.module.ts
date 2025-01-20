import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PaymentsModule } from './features/payments/payments.module';
import { AppoinmentsModule } from './features/appointments/appointment.module';
import { PatientsModule } from './features/patients/patients.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaymentsModule,
    PatientsModule,
    AppoinmentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
