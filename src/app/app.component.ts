import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "hasty-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // const lang = (navigator.language.split('-'))[0]; // o simplemente poner el nombre del json del multilang
    const lang = "en";
    this.translate.setDefaultLang(lang);
  }
}
