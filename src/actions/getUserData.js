import axios from '../utils/axios';
import { GET_USER_DATA, AUTH_FAILED } from './constants';

function getUserData(token) {
  return async function (dispatch) {
    try {
      const response = await axios.get('/login', { params: { token } });
      const { _id, name, profile_photo, email } = response.data.userData;
      dispatch({
        type: GET_USER_DATA,
        payload: { _id, name, profile_photo, email },
      });
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
      });
    }
  };
}

export default getUserData;
