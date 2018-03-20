import { Injectable } from '@angular/core';

@Injectable()
export class SpotyService {
  constructor() {
    console.log('constructor Service');
    console.log('otro log');
  }

  getArtistas() {
    let url =
      'https://api.spotify.com/v1/search?query=nickelback&type=artist&offset=0&limit=20';
  }
}
