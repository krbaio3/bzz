import { Injectable } from '@angular/core';

import { Heroe } from '../../models/heroe.model';

@Injectable()
export class HeroesService {
  private heroes: Heroe[];

  constructor() {
    console.log('servicio listo!!!');
  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroe(ind: string): Heroe {
    console.log(this.heroes);
    return this.heroes[ind];
  }

  searchHeroes(name: string): Heroe[] {
    const heroesArr: Heroe[] = [];
    name = name.toLocaleLowerCase();
    let count = 0;
    for (const heroe of this.heroes) {
      count++;
      const nombre = heroe.nombre.toLocaleLowerCase();
      if (nombre.indexOf(name) >= 0) {
        const miHeroe = Object.assign(heroe, { indice: count });
        heroesArr.push(miHeroe);
      }
    }
    this.heroes = heroesArr;
    return heroesArr;
  }
}
