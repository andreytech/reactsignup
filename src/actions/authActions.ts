import { REGISTER_SUCCESS, LOGIN_SUCCESS, IUser, ILoginData } from './types';
import { Dispatch } from 'redux';

export const register = (data:IUser) => (dispatch: Dispatch) => {
    dispatch({
        type: REGISTER_SUCCESS,
        payload: data
    })
};

export const login = (data:ILoginData) => (dispatch: Dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: data
    })
};

