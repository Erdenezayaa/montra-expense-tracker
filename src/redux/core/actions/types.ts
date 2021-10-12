export enum ACTION_TYPE {
  SIGNUP = 'core/signup',
  RESET_SIGNUP = 'core/signup_reset',
}

export type SignupForm = {
  email: string;
  name: string;
  password: string;
};

export type SignupResponse = {
  status: 'OK' | 'ERROR';
  data: {
    id: number;
  };
};

export type CoreState = {
  signupResponse: SignupResponse | null;
};
