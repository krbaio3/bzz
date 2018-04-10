import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  formulario: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: 'Jorge',
      apellido: 'KrBaIO3',
    },
    correo: 'krbaio3@gmail.com',
  };

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ])
    });

    console.log('Object USUARIO', this.usuario);

  }

  ngOnInit() {}

  guardarCambios() {
    console.log(this.formulario.value);
  }
}
