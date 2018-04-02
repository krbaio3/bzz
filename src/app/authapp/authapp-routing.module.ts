import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AuthappComponent } from './authapp.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthappComponent,
    // children: [
    //   {
    //     path: '',
    //     component: HomeComponent,
    //   },
    //   {
    //     path: 'home',
    //     component: HomeComponent,
    //   },
    //   {
    //     path: 'heroes',
    //     component: HeroesComponent,
    //   },
    //   {
    //     path: 'about',
    //     component: AboutComponent,
    //   },
    //   {
    //     path: 'pipes',
    //     component: PipesComponent,
    //   },
    //   {
    //     path: 'heroe',
    //     component: HeroeComponent,
    //     children: HEROE_ROUTES,
    //   },
    //   {
    //     path: 'search/:name',
    //     component: SearchComponent,
    //   },
    //   {
    //     path: '**',
    //     pathMatch: 'full',
    //     redirectTo: 'home',
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthappRoutingModule {}
