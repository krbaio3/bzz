import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search-spoty',
  templateUrl: './search-spoty.component.html',
  styleUrls: ['./search-spoty.component.scss'],
})
export class SearchSpotyComponent implements OnInit {
  constructor(public _spotifyService: SpotifyService) {
    this._spotifyService.getArtistas();
  }

  ngOnInit() {
    console.log('entra');
  }
}
