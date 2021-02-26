import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { CvComponent } from "./cv.component";
import { CvRoutingModule } from "./cv-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  exports: [CvComponent],
  imports: [CommonModule, TranslateModule.forChild({}), CvRoutingModule],
  declarations: [CvComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CvModule {}
