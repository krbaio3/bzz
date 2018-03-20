import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';

const APP_ROUTES: Routes = [
  { path: 'avenger', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'search/:name', component: SearchComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
