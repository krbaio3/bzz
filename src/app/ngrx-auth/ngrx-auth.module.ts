import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgrxAuthRoutingModule } from './ngrx-auth.routing';
import { NgrxAuthComponent } from './ngrx-auth.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  imports: [CommonModule, NgrxAuthRoutingModule, FormsModule],
  declarations: [
    NgrxAuthComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent
  ]
})
export class NgrxAuthModule {}
