import { NgModule } from '@angular/core';
import { PatientsComponent } from './patients.component';
import { Shared } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PatientsComponent

  ],
  imports: [
    Shared

  ],
  providers: [],
  bootstrap: []
})
export class PatientsModule { }
