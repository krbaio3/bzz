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

  getArtistas() {
    const url =
      'https://api.spotify.com/v1/search?query=nickelback&type=artist&limit=20';

    const headers = new HttpHeaders({
      authorization:
        'Bearer BQDyppX_Kupnyq6_UNNq_4mpTXsDxBVFlSVCSKr49O_SgScRqsjmoVH4KWUP-xhplOV8Tm3p6KyaxAUiFiI'
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
