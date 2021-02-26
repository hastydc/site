import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { ProjectsComponent } from "./projects.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  exports: [ProjectsComponent],
  imports: [CommonModule, TranslateModule.forChild({}), ProjectsRoutingModule],
  declarations: [ProjectsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsModule {}
