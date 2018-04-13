import { Injectable } from '@angular/core';

@Injectable()
export class HeroeAddService {

  constructor() { }

  getEditorial(): string[] {
    // llamada a MongoDB
    return ['DC', 'Marvel'];
  }

}
