import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { BrandsComponent } from "./brands.component";
import { BrandsRoutingModule } from "./brands-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  exports: [BrandsComponent],
  imports: [CommonModule, TranslateModule.forChild({}), BrandsRoutingModule],
  declarations: [BrandsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BrandsModule {}
