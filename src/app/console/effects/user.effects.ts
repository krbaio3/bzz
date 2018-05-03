import { Injectable } from '@angular/core';
import { UserService } from '../components/user/user.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.actions';
import { switchMap } from 'rxjs/operator/switchMap';
import { map } from 'rxjs/operator/map';

@Injectable()
export class UserEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(userActions.LOAD_USERS)
    .switchMap(() =>
      this.userService.loadUsers()
    ),
    map(users => new userActions.LoadUsersSuccessAction(users))
  );

  constructor(private userService: UserService, private actions$: Actions) {}
}
