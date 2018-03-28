import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';

import { SpotyRoutingModule } from './spoty/spoty-routing.module';
import { HeroesRoutingModule } from './heroes/heroes-routing.module';
import { MiscelaneosRoutingModule } from './miscelaneos/miscelaneos-routing.module';

import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
];

// @NgModule({
//     imports: [RouterModule.forRoot(
//     APP_ROUTES,
//     { enableTracing: true } // <-- debugging purposes only
//   )],
//   exports: [RouterModule]
// })
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true,
      enableTracing: true,
    }),
    SpotyRoutingModule,
    HeroesRoutingModule,
    MiscelaneosRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
