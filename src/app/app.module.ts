import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { HeroesService } from './service/heroes.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizePipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/dom-seguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    PipesComponent,
    CapitalizePipe,
    DomseguroPipe,
    PasswordPipe,
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [HeroesService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
