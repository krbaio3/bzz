import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/app.states';
import * as userAction from '../../../actions/user.actions';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private store: Store<AppState>) {
    this.store
      .select(state => state.users)
      .subscribe(users => (this.users = users));
  }

  ngOnInit(): void {
    // this.users = this.userService.loadUsers();
    this.getUsers();
  }

  getUsers() {
    // this.store
    //   .select(state => state.users)
    //   .subscribe(users => (this.users = users));
    this.store.dispatch(new userAction.LoadUsersAction());
  }

  deleteUser(userId: number): void {
    // this.userService.deleteUser(userId);
    // this.users = this.userService.loadUsers();
  }
}
