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
