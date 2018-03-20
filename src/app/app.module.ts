import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios

// Componentes
import { AppComponent } from './app.component';

// Modulos
import { NebularModule } from './nebular/nebular.module';
import { SpotyModule } from './spoty/spoty.module';
import { HeroesModule } from './heroes/heroes.module';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NebularModule,
    SpotyModule,
    HeroesModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
