import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscelaneosComponent } from './miscelaneos.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioDetalleComponent } from './components/usuario/detalle/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/editar/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuario/nuevo/usuario-nuevo.component';

const MISCELANEOS_ROUTES: Routes = [
  // { path: 'about_spoty', component: AboutComponent },
  { path: 'miscelaneos', component: MiscelaneosComponent },
  { path: 'usuario/:id',
    component: UsuarioComponent,
    children: [
      { path: 'nuevo', component: UsuarioNuevoComponent },
      { path: 'editar', component: UsuarioEditarComponent },
      { path: 'detalle', component: UsuarioDetalleComponent },
    ]},
  { path: 'home', component: HomeComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'home_spoty' },
  // { path: '**', pathMatch: 'full', redirectTo: 'miscelaneos' }
];

@NgModule({
  imports: [RouterModule.forChild(MISCELANEOS_ROUTES)],
  exports: [RouterModule],
})
export class MiscelaneosRoutingModule {}
