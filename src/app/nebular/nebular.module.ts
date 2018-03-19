import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
// 3rd Party
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService
} from '@nebular/theme';
import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';
// Componentes
import { NebularComponent } from './login/login.component';

@NgModule({
  imports: [
    NbThemeModule.forRoot({ name: 'default' }), // this will enable the default theme, you can change this to `cosmic` to enable the dark theme.
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
    NbLayoutModule,
    NbSidebarModule,
    CommonModule
  ],
  declarations: [NebularComponent],
  providers: [NbSidebarService] // we need this service for the sidebar
})
export class NebularModule {}
