import { Injectable } from '@angular/core';

@Injectable()
export class HeroeAddService {

  constructor() { }

  getEditorial(): object[] {
    // llamada a MongoDB
    return [{value: 'DC', code: 'dc'}, {value: 'Marvel', code: 'marvel'}];
  }

}
