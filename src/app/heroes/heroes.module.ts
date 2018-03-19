import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

// Servicios
import { HeroesService } from '../service/heroes.service';
// Componentes
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizePipe } from '../pipes/capitalizado.pipe';
import { DomseguroPipe } from '../pipes/dom-seguro.pipe';
import { PasswordPipe } from '../pipes/password.pipe';

@NgModule({
  imports: [CommonModule,
    HeroesRoutingModule
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    PipesComponent,
    CapitalizePipe,
    DomseguroPipe,
    PasswordPipe
  ],
  exports: [
    PipesComponent,
    CapitalizePipe,
    DomseguroPipe,
    PasswordPipe,
    NavbarComponent
  ],
  providers: [HeroesService]
})
export class HeroesModule {}
