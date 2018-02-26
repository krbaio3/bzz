import { Component } from "@angular/core";

@Component({
  selector: "hellow-app",
  template: require("./app.component.html"),
  styleUrls: ["./app.component.css"],
})
export class HelloComponent {
  message = "Wololooo";
}
