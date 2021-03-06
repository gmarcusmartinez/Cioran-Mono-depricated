import { createSelector } from 'reselect';
import { IState } from 'interfaces/state';

const selectAuthState = (state: IState) => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuthState],
  (auth) => auth.currentUser
);

export const selectCurrentUserTickets = createSelector(
  [selectAuthState],
  (auth) => auth.currentUser.assignedTickets
);

export const selectName = createSelector(
  [selectAuthState],
  (auth) => auth.currentUser.name
);
