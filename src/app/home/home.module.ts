import { HomeService } from './service/home.service';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { HomeRoutingModule, routedComponents } from './home-routing.module';

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [routedComponents],
  providers: [HomeService],
})
export class HomeModule {}

console.log('holawwwwww');
