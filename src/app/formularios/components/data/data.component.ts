import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { CONSTANTS } from '../../formulario.const';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  formulario: FormGroup;
  CONSTANTS: any;

  usuario: Usuario = {
    nombreCompleto: {
      nombre: 'Jorge',
      apellido: 'KrBaIO3'
    },
    email: 'krbaio3@gmail.com',
    hobbys: [],
  };

  constructor() {
    this.CONSTANTS = CONSTANTS;
    this.formulario = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ])
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),
      hobbys: new FormArray([
        new FormControl('Correr', [
          Validators.required
        ]),
      ])
    });

    // this.formulario.setValue(this.usuario);
  }

  ngOnInit() {}

  guardarCambios() {
    console.log(this.formulario.value);
  }

  resetForm() {
    const usuario: Usuario = {
      nombreCompleto: {
        nombre: '',
        apellido: '',
      },
      email: '',
    };

    this.formulario.reset(usuario);
  }
  addHobby() {
    (<FormArray>this.formulario.controls['hobby']).push(
      new FormControl('Boxeo', Validators.required)
    );
  }
}
