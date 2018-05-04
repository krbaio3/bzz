import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UdemyRoutingModule } from './udemy.routing';
import { UdemyComponent } from './udemy.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    UdemyRoutingModule
  ],
  declarations: [UdemyComponent, HomeComponent]
})
export class UdemyModule { }
