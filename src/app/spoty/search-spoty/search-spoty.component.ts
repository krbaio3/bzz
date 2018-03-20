import { Component, OnInit } from '@angular/core';

import { SpotyService } from '../services/spoty.service';

@Component({
  selector: 'app-search-spoty',
  templateUrl: './search-spoty.component.html',
  styleUrls: ['./search-spoty.component.scss']
})
export class SearchSpotyComponent implements OnInit {
  artista: string = '';

  constructor(public _spotifyService: SpotyService) {}

  buscarArtista() {

    if (this.artista.length == 0) {
      return;
    }

    this._spotifyService.getArtistas(this.artista).subscribe(response => {
      // console.log('Informacion: ', JSON.stringify(response, null, 4));
    });
  }

  ngOnInit() {
    console.log('entra');
  }
}
