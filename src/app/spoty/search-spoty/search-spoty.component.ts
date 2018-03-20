import { Component, OnInit } from '@angular/core';

import { SpotyService } from '../services/spoty.service';

@Component({
  selector: 'app-search-spoty',
  templateUrl: './search-spoty.component.html',
  styleUrls: ['./search-spoty.component.scss']
})
export class SearchSpotyComponent implements OnInit {
  constructor(private _spotyService: SpotyService) {}

  getArtistas() {
    let url =
      'https://api.spotify.com/v1/search?query=nickelback&type=artist&offset=0&limit=20';
  }

  ngOnInit() {}
}
