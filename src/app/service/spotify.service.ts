import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {
  constructor(public http: HttpClient) {
    console.log('servicio listo');
  }

  getArtistas() {
    console.log('Entra en Service');
    let url =
      'https://api.spotify.com/v1/search?query=nickelback&type=artist&limit=20';

      this.http.get(url)
        .subscribe(response => {
          console.log(response);
        });
  }
}
