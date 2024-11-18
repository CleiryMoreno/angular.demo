import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './features/patients/patients.component';

const routes: Routes = [
  {
    path: 'patients',
    loadChildren: ()=> import('./features/patients/patients.module').then(m=>m.PatientsModule)
  },
  {
    path: '',
    component: PatientsComponent
  },
  {
    path: 'payments',
    loadChildren: ()=> import('./features/payments/payments.module').then(m=>m.PaymentsModule),

  },
  {
    path: 'Appointments',
    loadChildren: ()=> import('./features/appointments/appointment.module').then(m=>m.AppoinmentsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
