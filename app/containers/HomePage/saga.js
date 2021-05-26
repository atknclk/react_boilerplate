import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_POST } from 'containers/App/constants';
import { usersLoaded, usersLoadingError } from 'containers/App/postActions';
import request from 'utils/request';

export function* getUsers() {
  const requestURL = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const users = yield call(request, requestURL);
    console.log(users);
    yield put(usersLoaded(users));
  } catch (err) {
    yield put(usersLoadingError(err));
  }
}

export default function* usersData() {
  yield takeLatest(LOAD_POST, getUsers);
}
