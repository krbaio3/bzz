import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSpotyComponent } from './home-spoty/home-spoty.component';
import { SearchSpotyComponent } from './search-spoty/search-spoty.component';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';

const SPOTY_ROUTES: Routes = [
  { path: 'about_spoty', component: AboutComponent },
  { path: 'home_spoty', component: HomeSpotyComponent },
  { path: 'search_spoty', component: SearchSpotyComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home_spoty' },
  { path: '**', pathMatch: 'full', redirectTo: 'home_spoty' }
];

@NgModule({
  imports: [RouterModule.forRoot(SPOTY_ROUTES)],
  exports: [RouterModule]
})
export class SpotyRoutingModule {}
