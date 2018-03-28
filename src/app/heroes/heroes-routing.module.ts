import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvengerComponent } from './avenger.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';

const APP_ROUTES: Routes = [
  {
    path: 'avenger',
    component: AvengerComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'pipes',
        component: PipesComponent
      },
      {
        path: 'heroe/:id',
        component: HeroeComponent
      },
      {
        path: 'search/:name',
        component: SearchComponent
      }
    ]
  },
  {
    path: '',
    component: AvengerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
