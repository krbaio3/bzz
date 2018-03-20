import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotyRoutingModule } from './spoty-routing.module';

import { HomeSpotyComponent } from './home-spoty/home-spoty.component';
import { SearchSpotyComponent } from './search-spoty/search-spoty.component';
import { NavBarSpotyComponent } from './shared/nav-bar-spoty/nav-bar-spoty.component';

import './spoty.styles.scss';
import { AboutComponent } from './about/about.component';

import { SpotyService } from './services/spoty.service';

@NgModule({
  imports: [CommonModule, SpotyRoutingModule],
  exports: [
    HomeSpotyComponent,
    NavBarSpotyComponent,
    SearchSpotyComponent,
    SpotyRoutingModule
  ],
  declarations: [
    HomeSpotyComponent,
    NavBarSpotyComponent,
    SearchSpotyComponent,
    AboutComponent
  ],
  providers: [SpotyService]
})
export class SpotyModule {}
