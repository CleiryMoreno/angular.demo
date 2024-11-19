import { RouterModule, Routes } from "@angular/router";
import { AppoinmentsComponent } from "./appoinments.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:'',
        component: AppoinmentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppoinmentsRoutingModule {}