import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotyService {
  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('constructor Service');
    console.log('otro log');
  }

  getToken() {}

  getArtistas(artista: string) {
    const url = `https://api.spotify.com/v1/search?query=${artista}&type=artist&limit=20`;

    const headers = new HttpHeaders({
      authorization:
        'Bearer BQCHxN6RuhuzqK0iuYpyQqGxVirgV1HfUSmt9SorxMADRi0SA6T_6HUPShV5u-WVvpF_dDBUVBi0P0phR_A'
    });

    return this.http.get(url, { headers }).map((response: any) => {
      this.artistas = response.artists.items;
      return this.artistas;
    });
    // .subscribe(response => {
    //   console.log('response!!');
    //   console.log(JSON.stringify(response, null, 4));
    // });
  }
}
