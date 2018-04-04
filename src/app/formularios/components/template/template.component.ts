import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  usuario: object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    gender: null
  };

  paises: object[] = [
    {
      codigo: 'ESP',
      nombre: 'España'
    },
    {
      codigo: 'AND',
      nombre: 'Andorra'
    },
    {
      codigo: 'USA',
      nombre: 'United Stated'
    }
  ];

  gender: string[] = [

  ];

  constructor() {}

  guardar(forma: NgForm) {
    console.log('post');
    console.log(forma);
    console.log(`Valor: ${JSON.stringify(forma.value, null, 4)}`);
    // console.log('Usuario', this.usuario);
  }
}
