import axios from 'axios';
import {
  onLoginError,
  onLoginSuccess,
  setLoading,
} from '../reducers/LoginReducer';
export const loginAction = (params: any) => async (dispatch: any) => {
  dispatch(setLoading(true));
  axios
    .post('https://reqres.in/api/login', params)
    .then((response: any) => {
      dispatch(setLoading(false));
      if (response?.status === 200) {
        dispatch(onLoginSuccess(response?.data?.token));
      }
    })
    .catch((e: any) => {
      dispatch(setLoading(false));
      dispatch(onLoginError(e?.message));
    });
};
