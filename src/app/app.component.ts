import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  option = false;

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
    this.option = true;
  }

  goToNebular() {
    console.log('entra Nebular');
    this.option = true;
  }

  goToMiscelaneos() {
    console.log('entra Miscelaneos');
    this.option = true;
  }

  goToAuth0() {
    console.log('entra Auth0');
    this.option = true;
  }

  goToForm () {
    console.log('entra forms');
    this.option = true;
  }
}
