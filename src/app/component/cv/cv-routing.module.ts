import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CvComponent } from "./cv.component";

const idRoute: Routes = [
  { path: "cv", pathMatch: "full", component: CvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(idRoute)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
