import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
// Se le quita el tipo porque al seleccionar Object/object, travis no construye
  usuario = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    gender: null
  };

  paises = [
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

  genders = [
    {
      value: 'm',
      name: 'Man'
    },
    {
      value: 'w',
      name: 'Women'
    },
    {
      value: 'nc',
      name: 'N/C'
    }
  ];

  constructor() { }

  guardar(forma: NgForm) {
    console.log('post');
    console.log(forma);
    console.log(`Valor: ${JSON.stringify(forma.value, null, 4)}`);
    // console.log('Usuario', this.usuario);
  }
}
