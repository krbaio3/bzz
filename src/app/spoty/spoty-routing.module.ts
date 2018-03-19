import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSpotyComponent } from './home-spoty/home-spoty.component';
import { SearchSpotyComponent } from './search-spoty/search-spoty.component';
import { AboutComponent } from './about/about.component';

const SPOTY_ROUTES: Routes = [
  { path: 'spoty', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeSpotyComponent },
  { path: 'search', component: SearchSpotyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(SPOTY_ROUTES)],
  exports: [RouterModule]
})
export class SpotyRoutingModule {}
