/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.posts || initialState;

const makeSelectId = () =>
  createSelector(
    selectHome,
    homeState => homeState.currentid,
  );

const makeSelectCode = () =>
  createSelector(
    selectHome,
    homeState => homeState.currentcode,
  );

export { makeSelectId, makeSelectCode };
