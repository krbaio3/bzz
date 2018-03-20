import { Component, OnInit } from '@angular/core';

import { SpotyService } from '../services/spoty.service';

@Component({
  selector: 'app-search-spoty',
  templateUrl: './search-spoty.component.html',
  styleUrls: ['./search-spoty.component.scss'],
})
export class SearchSpotyComponent implements OnInit {
  constructor(public _spotifyService: SpotyService) {
    // this._spotifyService.getArtistas();
  }

  ngOnInit() {
    console.log('entra');
  }
}
