import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heros', component: HeroesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  // { path: '**', component: PageNotFoundComponent },

];

export const APP_ROUTING = RouterModule.forRoot(
  APP_ROUTES,
  { enableTracing: true } // <-- debugging purposes only
);
