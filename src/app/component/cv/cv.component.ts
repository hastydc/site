import { Component, OnInit } from "@angular/core";

declare var $;

@Component({
  selector: "hasty-cv",
  styleUrls: ["./cv.component.scss"],
  templateUrl: "./cv.component.html",
})
export class CvComponent implements OnInit {
  // en CamelCase
  iWidth: number;

  constructor() {}

  ngOnInit() {
    this.iWidth = window.innerWidth;
  }
}
