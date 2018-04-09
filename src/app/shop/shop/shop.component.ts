import { UserService } from './../../core/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
})
export class ShopComponent implements OnInit {
  public userName: string;
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {}
}
