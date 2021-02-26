import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects.component";

const idRoute: Routes = [
  { path: "projects", pathMatch: "full", component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(idRoute)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
