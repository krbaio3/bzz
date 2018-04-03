import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {

  usuario: Object = {
    nombre: 'Jorge'
  };

  constructor() {}

  guardar(forma: NgForm) {
    console.log('post');
    console.log(forma);
    console.log(`Valor: ${forma.value}`);
  }
}
