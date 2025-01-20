import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './features/patients/patients.component';
import { PdfViewerComponent } from './features/pdf/pdf-viewer.component';

const routes: Routes = [
  {
    path: 'patients',
    loadChildren: ()=> import('./features/patients/patients.module').then(m=>m.PatientsModule)
  },
  {
    path: '',
    component: PdfViewerComponent
  },
  {
    path: 'payments',
    loadChildren: ()=> import('./features/payments/payments.module').then(m=>m.PaymentsModule),

  },
  {
    path: 'appointments',
    loadChildren: ()=> import('./features/appointments/appointment.module').then(m=>m.AppoinmentsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
