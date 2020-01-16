import { ListEmployeeComponent } from "./employee/list-employee.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { CreateEmployeeComponent } from "./employee/create-employee.component";

const appRoutes: Routes = [
  { path: "list", component: ListEmployeeComponent },
  { path: "create", component: CreateEmployeeComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
