import { Component } from '@angular/core';

import { AuthService } from '../../../service/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  public login() {
    this.auth.login();
  }

  public logout() {
    this.auth.logout();
  }
}
