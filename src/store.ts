import { createStore, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import { IRootState } from './actions/types';

const initialState: IRootState = {
  isAuthenticated: false,
  user: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
  }
};

const middleWare = [thunk];

const store = createStore(
  authReducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
