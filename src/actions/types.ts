export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IRootState {
  isAuthenticated: boolean;
  user: IUser;
}

export interface ILoginData {
  email: string;
  password: string;
  remember: boolean;
}

interface IRegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: IUser;
}

interface ILoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: ILoginData;
}


export type AuthActionTypes = IRegisterSuccessAction | ILoginSuccessAction;