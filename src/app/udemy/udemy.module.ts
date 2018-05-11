import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';

import { UdemyRoutingModule } from './udemy.routing';
import { UdemyComponent } from './udemy.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    UdemyRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  declarations: [
    UdemyComponent,
    HomeComponent
  ]
})
export class UdemyModule { }
