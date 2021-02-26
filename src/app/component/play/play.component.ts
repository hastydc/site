import { Component, OnInit } from "@angular/core";

declare var $;

@Component({
  // tslint:disable-next-line:component-selector
  selector: "hasty-play",
  styleUrls: ["./play.component.scss"],
  templateUrl: "./play.component.html",
})
export class PlayComponent implements OnInit {
  // en CamelCase
  constructor() {}

  ngOnInit() {
    const name = prompt(
      "Cual es el segundo nombre de la personita mas linda de la casa"
    );

    if (name.toUpperCase() == "STEFANNYA") {
      $(".content").fadeIn();
    }
  }

  check() {
    let msg = "";
    let count = 0;

    if (
      $("#11").val().toUpperCase() == "A" &&
      $("#12").val().toUpperCase() == "V" &&
      $("#13").val().toUpperCase() == "E" &&
      $("#14").val().toUpperCase() == "N" &&
      $("#15").val().toUpperCase() == "I" &&
      $("#16").val().toUpperCase() == "D" &&
      $("#17").val().toUpperCase() == "A"
    ) {
      msg = "La 1 esta bien.  ";
      count++;
    } else {
      msg = "La 1 esta mal.  ";
    }

    if (
      $("#21").val().toUpperCase() == "C" &&
      $("#17").val().toUpperCase() == "A" &&
      $("#23").val().toUpperCase() == "L" &&
      $("#24").val().toUpperCase() == "L" &&
      $("#25").val().toUpperCase() == "E"
    ) {
      msg += "La 2 esta bien.  ";
      count++;
    } else {
      msg += "La 2 esta mal.  ";
    }

    if (
      $("#31").val().toUpperCase() == "C" &&
      $("#11").val().toUpperCase() == "A" &&
      $("#33").val().toUpperCase() == "S" &&
      $("#34").val().toUpperCase() == "A"
    ) {
      msg += "La 3 esta bien.  ";
      count++;
    } else {
      msg += "La 3 esta mal.  ";
    }

    if (
      $("#41").val().toUpperCase() == "1" &&
      $("#42").val().toUpperCase() == "4" &&
      $("#43").val().toUpperCase() == "5"
    ) {
      msg += "La 4 esta bien.  ";
      count++;
    } else {
      msg += "La 4 esta mal.  ";
    }

    if (
      $("#41").val().toUpperCase() == "1" &&
      $("#52").val().toUpperCase() == "2" &&
      $("#53").val().toUpperCase() == "8"
    ) {
      msg += "La 5 esta bien.  ";
      count++;
    } else {
      msg += "La 5 esta mal.  ";
    }

    if (count > 4) {
      $(".end").fadeIn();
    } else {
      alert(msg);
    }
  }
}
