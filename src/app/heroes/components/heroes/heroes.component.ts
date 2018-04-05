import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';
import { Heroe } from '../../../models/heroe.model';
import { PruebaSrv } from '../../../service/service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // heroes: Heroe[] = [];
  miPrueba;
  heroes: Observable<Heroe[]>;
  input = 'read';
  constructor(
    private _heroesSrv: HeroesService,
    private router: Router,
    private route: ActivatedRoute,
    private pruebaSrv: PruebaSrv,
  ) {
    console.log('constructor Heroes');
  }

  ngOnInit() {
    console.log('ngOninit');
    this.miPrueba = this.pruebaSrv.getHeroes();
    this.heroes = this.pruebaSrv.getHeroes();
    // this.heroes = this._heroesSrv.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(indice: number) {
    console.log(indice);
    this.router.navigate(['../heroe', indice], { relativeTo: this.route });
  }

  changeInput(input: string) {
    this.input = input;
  }

  doAlert() {
    window.alert('entra');
  }

  goToEdit(indice: string) {
    console.log('editar');
    console.log(`indice ${indice}`);
  }

  gotToRemove(indice: string) {
    console.log('eliminar');
    console.log(`indice ${indice}`);
  }
}
