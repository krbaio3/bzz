import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
// 3rd Party
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbThemeModule
} from '@nebular/theme';

import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';
// Componentes
import { NebularComponent } from './nebular.component';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';

import { NebularRoutingModule } from './nebular.routing';

@NgModule({
  imports: [
    // this will enable the default theme, you can change this to `cosmic` to enable the dark theme.
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider
          //  config: {
          //   ...
          //  },
        }
      },
      forms: {}
    }),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    CommonModule,
    NebularRoutingModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  declarations: [NebularComponent, GridComponent, LoginComponent],
  providers: [NbSidebarService] // we need this service for the sidebar
})
export class NebularModule {}
