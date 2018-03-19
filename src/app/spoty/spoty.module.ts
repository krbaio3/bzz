import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSpotyComponent } from './home-spoty/home-spoty.component';
import { SearchSpotyComponent } from './search-spoty/search-spoty.component';
import { SpotyComponent } from './spoty/spoty.component';
import { NavBarSpotyComponent } from './shared/nav-bar-spoty/nav-bar-spoty.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    HomeSpotyComponent,
    NavBarSpotyComponent,
    SpotyComponent,
    SearchSpotyComponent
  ],
  declarations: [
    HomeSpotyComponent,
    NavBarSpotyComponent,
    SpotyComponent,
    SearchSpotyComponent
  ]
})
export class SpotyModule {}
