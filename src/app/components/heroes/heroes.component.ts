import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../service/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []; 

  constructor( private _heroesSrv: HeroesService) { 
    console.log('constructor Heroes');
  }

  ngOnInit() {
    console.log('ngOninit');
    this.heroes = this._heroesSrv.getHeroes();
    console.log(this.heroes);
  }

}
