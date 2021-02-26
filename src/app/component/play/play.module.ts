import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { PlayComponent } from "./play.component";
import { PlayRoutes } from "./play-routing.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    RouterModule.forChild(PlayRoutes),
    CommonModule,
    TranslateModule.forChild({}),
  ],
  declarations: [PlayComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlayModule {}
