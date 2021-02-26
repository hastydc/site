import { Component, OnInit } from "@angular/core";

declare var $;

@Component({
  selector: "hasty-projects",
  styleUrls: ["./projects.component.scss"],
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent implements OnInit {
  // en CamelCase
  iWidth: number;

  constructor() {}

  ngOnInit() {
    this.iWidth = window.innerWidth;
  }

  loadProject(p, e) {
    $(".p-content").fadeOut();
    $(".p-item").removeClass("active");
    $(e.target).addClass("active");
    setTimeout(function () {
      $("#" + p).fadeIn();
    }, 500);
  }
}
