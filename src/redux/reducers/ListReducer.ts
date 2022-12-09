import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ListReducerState {
  response: any;
  error: any;
  loading: boolean;
}

const initialState: ListReducerState = {
  response: null,
  error: null,
  loading: false,
};

export const ListReducerSlice = createSlice({
  name: 'ListReducer',
  initialState,
  reducers: {
    onListSuccess: (state, action: PayloadAction<any>) => {
      state.response = action.payload;
    },
    onListError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    resetListState: () => initialState,
  },
});

export const {onListSuccess, onListError, resetListState, setLoading} =
  ListReducerSlice.actions;

export default ListReducerSlice.reducer;
