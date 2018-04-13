import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { PruebaSrv } from '../../../../service/service';
import { HeroeAddService } from './heroe-add.service';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.scss'],
  providers: [HeroeAddService],
})
export class AddHeroeComponent implements OnInit {
  formAlta: FormGroup;
  editoriales: object[];

  constructor(
    private pruebaSrv: PruebaSrv,
    private heroAddService: HeroeAddService,
  ) {
    this.formAlta = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      biografia: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      fechAparicion: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      editorial: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  ngOnInit() {
    this.editoriales = this.heroAddService.getEditorial();
  }

  onSubmit() {
    console.log(`Valor: ${JSON.stringify(this.formAlta.value, null, 4)}`);
    // this.pruebaSrv.addHeroe()
  }
}
