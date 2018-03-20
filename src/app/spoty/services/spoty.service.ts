import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotyService {
  artistas: any[] = [];

  urlSpotyfy = 'https://api.spotify.com/v1/';

  token = 'BQA-j6KTgcSHjIR3FguzuPbfG5-NN9kFBTz5bqrA11n92l0l3W1jTh5L4N8DQrakYti60-J1KvJgjEoKlU8';

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
          // this.getToken();
          return console.error(`Error: ${JSON.stringify(response, null, 4)}`);
        }
        this.artistas = response.artists.items;
        return this.artistas;
      });
    // .subscribe(response => {
    //   console.log('response!!');
    //   console.log(JSON.stringify(response, null, 4));
    // });
  }

  getArtista(id: string) {
    const url = `${this.urlSpotyfy}artists/${id}`;

    return this.http.get(url, { headers: this.getHeaders() });
    // .map((response: any) => {
    //   this.artistas = response.artists.items;
    //   return this.artistas;
    // });
  }
}
