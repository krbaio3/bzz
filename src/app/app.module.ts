import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Pipes
// import { PasswordPipe, CapitalizePipe, DomseguroPipe } from './pipes/index';
// import { PipesModule } from './pipes/pipes.module';

// Componentes
import { AppComponent } from './app.component';

// Modulos
import { NebularModule } from './nebular/nebular.module';
import { SpotyModule } from './spoty/spoty.module';
import { HeroesModule } from './heroes/heroes.module';
import { MiscelaneosModule } from './miscelaneos/miscelaneos.module';

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
    MiscelaneosModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
