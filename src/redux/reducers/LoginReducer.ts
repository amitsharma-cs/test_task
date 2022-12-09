import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface loginReducerState {
  response: any;
  error: any;
  loading: boolean;
}

const initialState: loginReducerState = {
  response: null,
  error: null,
  loading: false,
};

export const loginReducerSlice = createSlice({
  name: 'loginReducer',
  initialState,
  reducers: {
    onLoginSuccess: (state, action: PayloadAction<any>) => {
      state.response = action.payload;
    },
    onLoginError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    resetLoginState: () => initialState,
  },
});

export const {onLoginSuccess, onLoginError, resetLoginState, setLoading} =
  loginReducerSlice.actions;

export default loginReducerSlice.reducer;
