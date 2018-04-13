import { Component, OnInit } from '@angular/core';
import { PruebaSrv } from '../../../../service/service';
import { HeroeAddService } from './heroe-add.service';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.scss'],
  providers: [HeroeAddService]
})
export class AddHeroeComponent implements OnInit {
  editoriales: string[];

  constructor(
    private pruebaSrv: PruebaSrv,
    private heroAddService: HeroeAddService
  ) {}

  ngOnInit() {
    this.editoriales = this.heroAddService.getEditorial();
  }

  onSubmit(...args) {
    console.log('entra', args);
    // this.pruebaSrv.addHeroe()
  }
}
