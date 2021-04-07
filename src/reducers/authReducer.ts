import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    IRootState,
    AuthActionTypes
} from '../actions/types';

const initialState: IRootState = {
    isAuthenticated: false,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
};

export default function(state = initialState, action: AuthActionTypes) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
