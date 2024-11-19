import { RouterModule, Routes } from "@angular/router";
import { PatientsComponent } from "./patients.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:'',
        component: PatientsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientsRoutingModule {}