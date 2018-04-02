import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthappRoutingModule } from './authapp-routing.module';
import { AuthappComponent } from './authapp.component';

@NgModule({
  imports: [
    CommonModule,
    AuthappRoutingModule
  ],
  declarations: [AuthappComponent]
})
export class AuthappModule { }
