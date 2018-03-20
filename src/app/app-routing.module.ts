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

// import { HomeComponent } from './components/home/home.component';
// import { HeroesComponent } from './components/heroes/heroes.component';
// import { AboutComponent } from './components/about/about.component';
// import { HeroeComponent } from './components/heroe/heroe.component';
// import { SearchComponent } from './components/search/search.component';
// import { PipesComponent } from './components/pipes/pipes.component';

import { NebularComponent } from './nebular/login/login.component';

import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  { path: '', component: AppComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'pipes', component: PipesComponent },
  { path: 'nebular', component: NebularComponent },
  // { path: 'heroe/:id', component: HeroeComponent },
  // { path: 'search/:name', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent
      },
      {
        path: 'login',
        component: NbLoginComponent
      },
      {
        path: 'register',
        component: NbRegisterComponent
      },
      {
        path: 'logout',
        component: NbLogoutComponent
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent
      }
    ]
  }
];

//   imports: [RouterModule.forRoot(
// @NgModule({
//     APP_ROUTES,
//     { enableTracing: true } // <-- debugging purposes only
//   )],
//   exports: [RouterModule]
// })
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
    SpotyRoutingModule,
    HeroesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
