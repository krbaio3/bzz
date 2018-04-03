import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesRoutingModule } from './heroes/heroes.routing';
import { SpotyRoutingModule } from './spoty/spoty.routing';
import { NebularRoutingModule } from './nebular/nebular.routing';
import { MiscelaneosRoutingModule } from './miscelaneos/miscelaneos.routing';
import { AuthappRoutingModule } from './authapp/authapp.routing';
import { FormulariosRoutingModule } from './formularios/formularios.routing';

import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { option: false },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
    data: { option: false },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true,
      enableTracing: true,
    }),
    HeroesRoutingModule,
    SpotyRoutingModule,
    NebularRoutingModule,
    MiscelaneosRoutingModule,
    AuthappRoutingModule,
    FormulariosRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
