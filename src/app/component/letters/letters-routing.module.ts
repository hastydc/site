import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LettersComponent } from "./page/letters.component";

export const LettersRoutes: Route[] = [
  {
    path: "",
    children: [
      { path: "", component: LettersComponent },
      { path: ":id", component: LettersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(LettersRoutes)],
  exports: [RouterModule],
})
export class LettersRoutingModule {}
