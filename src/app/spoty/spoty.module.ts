import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SpotyRoutingModule } from './spoty-routing.module';

import { HomeSpotyComponent } from './home-spoty/home-spoty.component';
import { SearchSpotyComponent } from './search-spoty/search-spoty.component';

import { NavBarSpotyComponent } from './shared/nav-bar-spoty/nav-bar-spoty.component';
import { AboutComponent } from './about/about.component';

import { SpotifyService } from '../service/spotify.service';

import './spoty.styles.scss';

@NgModule({
  imports: [CommonModule, SpotyRoutingModule, HttpClientModule],
  exports: [
    NavBarSpotyComponent,
  ],
  declarations: [
    HomeSpotyComponent,
    NavBarSpotyComponent,
    SearchSpotyComponent,
    AboutComponent,
  ],
  providers: [
    // SpotifyService
  ],
})
export class SpotyModule {}
