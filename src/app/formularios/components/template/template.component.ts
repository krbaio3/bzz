import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
  };

  constructor() {}

  guardar(forma: NgForm) {
    console.log('post');
    console.log(forma);
    console.log(`Valor: ${JSON.stringify(forma.value, null, 4)}`);
    // console.log('Usuario', this.usuario);
  }
}
