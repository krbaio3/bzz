import { Component } from "@angular/core";

@Component({
  selector: "hellow-app",
  styles: ["./app.component.css"],
  template: require("./app.component.html"),
})
export class HelloComponent {
  message = "Wololooo";
}
