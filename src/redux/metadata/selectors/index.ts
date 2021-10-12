import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

const getRoot = (state: RootState) => state.metadata;

const defaultMeta = {
  pending: false,
  loaded: false,
  error: false,
};

export const createMetaSelector = ({typePrefix}: {typePrefix: string}) => {
  return createSelector(getRoot, state => {
    return state[typePrefix] || defaultMeta;
  });
};
