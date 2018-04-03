// Angular
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// Environments
import { environment } from '../environments/environment';

// 3rd Party
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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
import { AuthappModule } from './authapp/authapp.module';
import { FormulariosModule } from './formularios/formularios.module';

import { PruebaSrv } from './service/service';

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
    MiscelaneosModule,
    AuthappModule,
    AngularFireModule.initializeApp(environment.fireConfig, 'bzz-poc'),
    AngularFirestoreModule,
    FormulariosModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, PruebaSrv],
  bootstrap: [AppComponent],
})
export class AppModule {}
