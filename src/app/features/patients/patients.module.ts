import { NgModule } from '@angular/core';
import { PatientsComponent } from './patients.component';
import { Shared } from 'src/app/shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';

@NgModule({
  declarations: [
    PatientsComponent

  ],
  imports: [
    Shared,
    PatientsRoutingModule

  ],
  providers: [],
  bootstrap: []
})
export class PatientsModule { }
