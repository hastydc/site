import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./component/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "letters",
    loadChildren: () =>
      import("./component/letters/letters.module").then((m) => m.LettersModule),
  },
  {
    path: "play",
    loadChildren: () =>
      import("./component/play/play.module").then((m) => m.PlayModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
