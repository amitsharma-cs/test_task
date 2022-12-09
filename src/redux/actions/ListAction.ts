import axios from 'axios';
import {onListSuccess, onListError, setLoading} from '../reducers/ListReducer';
export const listAction = () => async (dispatch: any) => {
  dispatch(setLoading(true));
  axios
    .get('https://reqres.in/api/users?page=1')
    .then((response: any) => {
      dispatch(setLoading(false));
      if (response?.status === 200) {
        dispatch(onListSuccess(response?.data?.data));
      }
    })
    .catch((e: any) => {
      alert(e?.message);
      dispatch(setLoading(false));
      dispatch(onListError(e?.message));
    });
};
