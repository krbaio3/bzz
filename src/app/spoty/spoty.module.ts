import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SpotyRoutingModule } from './spoty-routing.module';
// Pipes

import { WithOutPicturePipe } from './pipes/with-out-picture.pipe';
import { PipesModule } from '../pipes/pipes.module';

import { HomeSpotyComponent } from './home-spoty/home-spoty.component';
import { SearchSpotyComponent } from './search-spoty/search-spoty.component';

import { NavBarSpotyComponent } from './shared/nav-bar-spoty/nav-bar-spoty.component';
import { AboutComponent } from './about/about.component';

import './spoty.styles.scss';

import { SpotyService } from './services/spoty.service';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  imports: [CommonModule, FormsModule, SpotyRoutingModule, PipesModule],
  exports: [NavBarSpotyComponent],
  declarations: [
    HomeSpotyComponent,
    NavBarSpotyComponent,
    SearchSpotyComponent,
    AboutComponent,
    WithOutPicturePipe,
    ArtistComponent,
  ],
  providers: [SpotyService],
})
export class SpotyModule {}
