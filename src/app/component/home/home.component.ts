import { ChangeDetectorRef, Component, OnInit } from "@angular/core";

declare var $;

@Component({
  selector: "hasty-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  // en CamelCase
  iWidth: number;
  current: string;

  constructor(private changes: ChangeDetectorRef) {}

  ngOnInit() {
    this.iWidth = window.innerWidth;
  }

  load(s, e) {
    this.current = s;
    this.changes.detectChanges();
    const self = this;
    $("#" + this.current).css("display", "flex");
    $(".mail").fadeOut();

    if (!$(e.target).hasClass("active")) {
      $(".line").fadeOut();
      $(e.target).addClass("active");
      $(".item").each(function () {
        if (!$(this).hasClass("active")) {
          $(this).animate({ opacity: 0, height: 0 });
        }
      });
      setTimeout(
        function () {
          $(".menu").animate({ height: "200px" });
          $(".close").fadeIn("", function () {
            $(".bond").animate(
              { height: "95vh" },
              {
                complete: function () {
                  $(".bond").animate(
                    { height: self.iWidth < 700 ? "220px" : "260px" },
                    { duration: 1000 }
                  );
                  $("#" + self.current).animate(
                    { "margin-top": self.iWidth < 700 ? "0px" : "50px" },
                    {
                      duration: 1000,
                      complete: function () {
                        $("#" + self.current + " .content").animate({
                          opacity: 1,
                        });
                        $("#home").css("overflow", "auto");
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

  close() {
    this.changes.detectChanges();
    const self = this;
    $("#home").css("overflow", "hidden");

    $(".close").fadeOut("", function () {
      $("#" + self.current + " .content").animate({ opacity: 0 });
      $(".bond").animate({ height: "95vh" }, { duration: 1000 });
      $("#" + self.current).animate(
        { "margin-top": self.iWidth < 700 ? "71vh" : "81vh" },
        {
          duration: 1000,
          complete: function () {
            $("#" + self.current).css("display", "none");
            $(".bond").animate(
              { height: "0vh" },
              {
                complete: function () {
                  $(".menu").animate(
                    { height: "100vh" },
                    {
                      complete: function () {
                        $(".item").each(function () {
                          $(this).css(
                            "height",
                            self.iWidth < 700 ? "50px" : "90px"
                          );
                        });

                        $(".item").each(function () {
                          $(this).css("opacity", "1");
                        });

                        $(".line").fadeIn();
                        $(".item").removeClass("active");
                        $(".mail").fadeIn();
                      },
                    }
                  );
                },
              }
            );
          },
        }
      );
    });
  }
}
