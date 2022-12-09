import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './reducers/LoginReducer';
import listReducer from './reducers/ListReducer';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
