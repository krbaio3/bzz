import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotyService {
  artistas: any[] = [];

  tracks: any[] = [];

  urlSpotyfy = 'https://api.spotify.com/v1/';

  token = 'BQCZ-_MGnBPz01gb2smO3FSSucXY-QXBi0RcjCcNA5ybQ5MKUSTazGW4vYQjupCJBjjtS5jyYLrzE8Ej6hA';

  country = 'US';

  constructor(public http: HttpClient) {
    console.log('constructor Service');
    console.log('otro log');
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      authorization: `Bearer ${this.token}`
    });
    // return headers;
  }

  getToken() {
    let urlToken = 'https://accounts.spotify.com/api/token';

    let headersToken = new HttpHeaders({
      grant_type: 'client_credentials',
      client_id: '94b5ad27c9b5400a9044a8728339df3b',
      client_secret: '7ecd9ce9604941c9a31b87977a91bb70'
    });

    this.http.post(urlToken, { headers: headersToken }).map((response: any) => {
      if (response.error) {
        return console.error(`Error: ${JSON.stringify(response, null, 4)}`);
      }
      this.token = response.access_token;
      console.log('Token Cambiado: ', this.token);
    });
  }

  getArtistas(artista: string) {
    const url = `${
      this.urlSpotyfy
    }search?query=${artista}&type=artist&limit=20`;

    return this.http
      .get(url, { headers: this.getHeaders() })
      .map((response: any) => {
        if (response.error && response.error.error.status === '401') {
          // if (response.hasOwnProperty('error') && response.error.error.status === '401') {
          // this.getToken();
          return console.error(`Error: ${JSON.stringify(response, null, 4)}`);
        }
        this.artistas = response.artists.items;
        return this.artistas;
      });
  }

  getArtista(id: string) {
    const url = `${this.urlSpotyfy}artists/${id}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getTop(id: string) {
    const url = `${this.urlSpotyfy}artists/${id}/top-tracks?country=${
      this.country
    }`;

    return this.http
      .get(url, { headers: this.getHeaders() })
      .map((response: any) => {
        if (response.error && response.error.error.status === '401') {
          // if (response.hasOwnProperty('error') && response.error.error.status === '401') {
          // this.getToken();
          return console.error(`Error: ${JSON.stringify(response, null, 4)}`);
        }
        this.tracks = response.tracks;
        return this.tracks;
      });
  }
}
