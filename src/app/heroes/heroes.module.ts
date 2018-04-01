import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { PipesModule } from '../pipes/pipes.module';

// Servicios
import { HeroesService } from './service/heroes.service';
// Componentes
import { AvengerComponent } from './avenger.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AddHeroeComponent } from './components/heroe/add-heroe.component';
import { RemoveHeroeComponent } from './components/heroe/remove-heroe.component';
import { EditHeroeComponent } from './components/heroe/edit-heroe.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    PipesModule
  ],
  exports: [
    // AvengerComponent,
  ],
  declarations: [
    AvengerComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    PipesComponent,
    AddHeroeComponent,
    RemoveHeroeComponent,
    EditHeroeComponent,
  ],
  providers: [HeroesService],
})
export class HeroesModule {}
