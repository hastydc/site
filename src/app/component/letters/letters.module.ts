import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { LettersRoutingModule } from "./letters-routing.module";
import { CommonModule } from "@angular/common";
import { LettersComponent } from "./page/letters.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    LettersRoutingModule,
    CommonModule,
    TranslateModule.forChild({}),
    FormsModule,
  ],
  declarations: [LettersComponent],
})
export class LettersModule {}
