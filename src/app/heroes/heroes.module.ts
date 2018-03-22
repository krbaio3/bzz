import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { PipesModule } from '../pipes/pipes.module';

// Servicios
import { HeroesService } from './service/heroes.service';
// Componentes
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';
// import {}

@NgModule({
  imports: [CommonModule, HeroesRoutingModule, PipesModule],
  exports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    PipesComponent,
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    PipesComponent,
  ],
  providers: [HeroesService],
})
export class HeroesModule {}
