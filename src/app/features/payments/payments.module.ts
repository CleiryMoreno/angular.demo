import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';
import { Shared } from 'src/app/shared/shared.module';
import { PaymentsRoutingModule } from './payments-routing.module';

@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    Shared, 
    PaymentsRoutingModule
  ],
  providers: [],
  bootstrap: [],
})
export class PaymentsModule {}
