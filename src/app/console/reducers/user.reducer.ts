import * as userActions from '../actions/user.actions';

export const userReducer = (state = [], action: userActions.Action) => {
  switch (action.type) {
    case userActions.LOAD_USERS_SUCCESS:
     return action.payload;
    default:
      return state;
  }
};
