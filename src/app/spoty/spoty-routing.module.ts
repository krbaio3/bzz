import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSpotyComponent } from './home-spoty/home-spoty.component';
import { SearchSpotyComponent } from './search-spoty/search-spoty.component';
import { SpotyComponent } from './spoty.component';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';

const SPOTY_ROUTES: Routes = [
  {
    path: 'spoty',
    component: SpotyComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'home',
        component: HomeSpotyComponent
      },
      {
        path: 'search',
        component: SearchSpotyComponent
      },
      {
        path: 'artist/:id',
        component: ArtistComponent
      }
      // {
      //   path: '**',
      //   pathMatch: 'full',
      //   redirectTo: 'home'
      // }
    ]
  }

  // { path: '', pathMatch: 'full', redirectTo: 'home_spoty' },
  // { path: '**', pathMatch: 'full', redirectTo: 'home_spoty' }
];

@NgModule({
  imports: [RouterModule.forRoot(SPOTY_ROUTES)],
  exports: [RouterModule]
})
export class SpotyRoutingModule {}
