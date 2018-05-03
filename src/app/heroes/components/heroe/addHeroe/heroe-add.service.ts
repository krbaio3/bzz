import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { CONSTANTES } from '../heroe.constans';
import { Http } from '@angular/http';
import { Heroe } from '../models/I-AddHeroe';
import { Utils } from '../utils';

@Injectable()
export class HeroeAddService {

  heroeURL = CONSTANTES.heroesURL;

  constructor(private http: Http, private utils: Utils) {}

  nuevoHeroe (heroe: Heroe) {
    // let body = this.utils.body(heroe);
    // let headers = this.utils.headers;

    // return this.http.post(this.heroeURL, body, {headers})
    // .map(response => {
    //   console.log(response.json());
    //   return response.json;
    // });
  }

  getEditorial(): Editorial[] {
    // llamada a MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }
}
