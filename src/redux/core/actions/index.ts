import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {SignupForm, SignupResponse, ACTION_TYPE} from './types';

function signUpLocal(params: SignupForm): Promise<SignupResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params.email === 'johndoe@gmail.com') {
        resolve({status: 'OK', data: {id: 1}});
      }
      reject('No Database');
    }, 1500);
  });
}

export const signUp = createAsyncThunk<SignupResponse, SignupForm>(
  ACTION_TYPE.SIGNUP,
  async (params, {rejectWithValue}) => {
    try {
      const res = await signUpLocal(params);
      return res;
    } catch (error) {
      return rejectWithValue({error: error});
    }
  },
);

export const signupReset = createAction(ACTION_TYPE.RESET_SIGNUP);
