import { Component, OnInit } from "@angular/core";

declare var $;

@Component({
  selector: "hasty-brands",
  styleUrls: ["./brands.component.scss"],
  templateUrl: "./brands.component.html",
})
export class BrandsComponent implements OnInit {
  // en CamelCase
  iWidth: number;

  constructor() {}

  ngOnInit() {
    this.iWidth = window.innerWidth;
  }

  load(e) {
    $(e.target).parent().toggleClass("active");
    const active = $(e.target).parent().hasClass("active");
    const self = this;

    $(e.target)
      .parent()
      .find(".mask")
      .animate({ opacity: active ? "1" : "0" });
    $(e.target)
      .parent()
      .find(".content-brand")
      .animate({ opacity: active ? "1" : "0" });

    setTimeout(function () {
      if (active) {
        $(e.target).parent().find(".black").hide();
        $(e.target).parent().find(".white").show();
      } else {
        $(e.target).parent().find(".black").show();
        $(e.target).parent().find(".white").hide();
      }
    }, 500);
  }
}
