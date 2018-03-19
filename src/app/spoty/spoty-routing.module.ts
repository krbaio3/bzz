import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSpotyComponent } from './home-spoty/home-spoty.component';
import { SearchSpotyComponent } from './search-spoty/search-spoty.component';

const SPOTY_ROUTES: Routes = [
  { path: '', component: SearchSpotyComponent },
  { path: 'spoty', component: HomeSpotyComponent },
  { path: 'home_spoty', component: HomeSpotyComponent },
  { path: 'spoty_search', component: SearchSpotyComponent }
];

//   imports: [RouterModule.forRoot(
// @NgModule({
//     APP_ROUTES,
//     { enableTracing: true } // <-- debugging purposes only
//   )],
//   exports: [RouterModule]
// })

@NgModule({
  imports: [RouterModule.forRoot(SPOTY_ROUTES)],
  exports: [RouterModule]
})
export class SpotyRoutingModule {}
