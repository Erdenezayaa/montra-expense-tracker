import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

const getRoot = (state: RootState) => state.core;

export const signupResponse = createSelector(
  getRoot,
  state => state.signupResponse,
);
