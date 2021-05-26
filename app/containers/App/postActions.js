import { LOAD_POST, LOAD_POST_SUCCESS, LOAD_POST_ERROR } from './constants';

export function loadPost() {
  return {
    type: LOAD_POST,
  };
}

export function usersLoaded(users) {
  return {
    type: LOAD_POST_SUCCESS,
    users,
  };
}

export function usersLoadingError(error) {
  return {
    type: LOAD_POST_ERROR,
    error,
  };
}
