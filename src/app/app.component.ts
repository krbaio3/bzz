import { Component } from "@angular/core";

@Component({
  selector: "hellow-app",
  // template: require('./app.component.html'),
  // styles: [require('./app.component.scss').toString()]
  styles: ["./app.component.scss"],
  template: "./app.component.html",
})
export class HelloComponent {
  message = "Wololooo";
}
