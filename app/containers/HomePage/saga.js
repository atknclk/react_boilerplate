/**
 * Gets the repositories of the user from Github
 */

// import { call, put, select, takeLatest } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_POSTS } from 'containers/App/constants';
// import { LOAD_REPOS, LOAD_USERS } from 'containers/App/constants';
// import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { postsLoaded, postsLoadingError } from 'containers/App/toDoActions';

import request from 'utils/request';
import { makeSelectId, makeSelectCode } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getPosts() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const year = yield select(makeSelectId());
  const country = yield select(makeSelectCode());
  const requestURL = `https://holidays.abstractapi.com/v1/?api_key=7964bcd5393d47c39145c44c019732fa&country=${country}&year=${year}`;

  try {
    const posts = yield call(request, requestURL);
    yield put(postsLoaded(posts));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export default function* usersData() {
  yield takeLatest(LOAD_POSTS, getPosts);
}

/**
 * Root saga manages watcher lifecycle
 */
// export default function* githubData() {
// Watches for LOAD_REPOS actions and calls getRepos when one comes in.
// By using `takeLatest` only the result of the latest API call is applied.
// It returns task descriptor (just like fork) so we can continue execution
// It will be cancelled automatically on component unmount
// yield takeLatest(LOAD_REPOS, getRepos);
// }
