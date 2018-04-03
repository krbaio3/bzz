import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthappRoutingModule } from './authapp-routing.module';
import { AuthappComponent } from './authapp.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// servicio
import { AuthService } from './service/auth-service.service';
import { AuthGuardService } from './service/auth-guard.service';

@NgModule({
  imports: [CommonModule, AuthappRoutingModule],
  declarations: [
    AuthappComponent,
    NavBarComponent,
    HomeComponent,
    PrecioComponent,
    ProtegidaComponent
  ],
  providers: [AuthService, AuthGuardService]
})
export class AuthappModule {}
