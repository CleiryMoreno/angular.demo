import { NgModule } from '@angular/core';
import { AppoinmentsComponent } from './appoinments.component';
import { Shared } from 'src/app/shared/shared.module';
import { AppoinmentsRoutingModule } from './appointments-routing.module';


@NgModule({
  declarations: [
    AppoinmentsComponent,

  ],
  imports: [
    Shared,
    AppoinmentsRoutingModule

  ],
  providers: [],
  bootstrap: []
})
export class AppoinmentsModule { }
