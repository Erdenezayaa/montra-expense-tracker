import {createReducer} from '@reduxjs/toolkit';
import * as actions from '../actions';
import {CoreState} from '../actions/types';

const initialState: CoreState = {
  signupResponse: null,
};

export default createReducer(initialState, builder => {
  builder.addCase(actions.signUp.fulfilled, (state, action) => {
    state.signupResponse = action.payload;
  });
  builder.addCase(actions.signupReset, state => {
    state.signupResponse = null;
  });
});
