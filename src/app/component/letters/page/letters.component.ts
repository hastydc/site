import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { poems } from "src/environments/poems";

declare var $;

@Component({
  selector: "hasty-letters",
  styleUrls: ["./letters.component.scss"],
  templateUrl: "./letters.component.html",
})
export class LettersComponent implements OnInit {
  currentPoem = 0;
  poemList = [];
  iWidth: number;

  constructor(
    private route: ActivatedRoute,
    private changes: ChangeDetectorRef
  ) {
    this.route.params.subscribe(async (params) => {
      this.iWidth = window.innerWidth;
      this.poemList = poems;
      this.currentPoem = params.id || 1;
      await this.sleep(1);
      this.load();
    });
  }

  ngOnInit(): void {}

  get getPoem(): any {
    return this.poemList.find((x) => x.id == this.currentPoem);
  }

  load(): void {
    this.changes.detectChanges();
    const self = this;
    const target = $("#select").parent();
    $("#letter").css("display", "flex");

    if (!$(target).hasClass("active")) {
      $(".line").fadeOut();
      $(target).addClass("active");
      setTimeout(
        async function () {
          $(".menu").animate({ height: "200px" });
          await self.sleep(500);
          $(".close").fadeIn("", function () {
            $(".bond").animate(
              { height: "95vh" },
              {
                complete: function () {
                  $(".bond").animate(
                    { height: self.iWidth < 700 ? "220px" : "260px" },
                    { duration: 1000 }
                  );
                  $("#letter").animate(
                    { "margin-top": self.iWidth < 700 ? "0px" : "50px" },
                    {
                      duration: 1000,
                      complete: function () {
                        $("#letter .content").animate({
                          opacity: 1,
                        });
                        $("#letters").css("overflow", "auto");
                      },
                    }
                  );
                },
              }
            );
          });
        },
        1000,
        function () {}
      );
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
