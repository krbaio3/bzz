import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../service/heroes.service';
import { Heroe } from '../../models/heroe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroesSrv: HeroesService, private router:Router) {
    console.log('constructor Heroes');
  }

  ngOnInit() {
    console.log('ngOninit');
    this.heroes = this._heroesSrv.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(indice: number) {
    console.log(indice);
    this.router.navigate(['/heroe', indice]);
  }
}
