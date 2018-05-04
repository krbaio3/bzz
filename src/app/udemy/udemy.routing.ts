import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UdemyComponent } from './udemy.component';
import { HomeComponent } from './components/home/home.component';

const UDEMY_ROUTES: Routes = [
  {
    path: 'udemy',
    component: UdemyComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(UDEMY_ROUTES)],
  exports: [RouterModule]
})
export class UdemyRoutingModule {}
