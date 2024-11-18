import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';
import { Shared } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PaymentsComponent,
  ],
  imports: [
    Shared

  ],
  providers: [],
  bootstrap: []
})
export class PaymentsModule { }
