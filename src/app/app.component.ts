import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  option: boolean;
  spoty: boolean;
  nebular: boolean;

  constructor() {
    // this.spoty = true;
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  goToAvengers() {
    console.log('entra Avengers');
    this.option = true;
  }

  goToSpoty() {
    console.log('entra Spoty');
    this.spoty = true;
  }

  goToNebular() {
    console.log('entra Nebular');
    this.nebular = true;
  }
}
