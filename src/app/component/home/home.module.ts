import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { HomeComponent } from "./home.component";
import { HomeRoutes } from "./home-routing.module";
import { CvModule } from "src/app/component/cv/cv.module";
import { ProjectsModule } from "src/app/component/projects/projects.module";
import { BrandsModule } from "src/app/component/brands/brands.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes),
    CommonModule,
    TranslateModule.forChild({}),
    CvModule,
    ProjectsModule,
    BrandsModule,
  ],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
