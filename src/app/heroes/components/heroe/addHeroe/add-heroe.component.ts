import { Component, OnInit } from '@angular/core';
import {PruebaSrv} from '../../../../service/service';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.scss']
})
export class AddHeroeComponent implements OnInit {

  constructor(private pruebaSrv: PruebaSrv) { }

  ngOnInit() {
  }

  onSubmit(...args) {
    console.log('entra', args);
    // this.pruebaSrv.addHeroe()
  }

}
