import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { BrandsComponent } from "./brands.component";

const idRoute: Routes = [
  { path: "brands", pathMatch: "full", component: BrandsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(idRoute)],
  exports: [RouterModule],
})
export class BrandsRoutingModule {}
