import axios from '../utils/axios';
import { REGISTER, TOKEN } from '../actions/constants';
import history from '../utils/history';
import { swalStyled } from '../components/SwalCongfig';

export function register(registerData) {
  return async function (dispatch) {
    try {
      const response = await axios.post('/register', registerData);
      const token = response.data.token;
      const userData = response.data.userData;
      localStorage.setItem(TOKEN, token);
      dispatch({ type: REGISTER, payload: { token, userData } });
      swalStyled.fire({
        icon: 'success',
        title: 'Successful Registration',
      });
      history.push('/home');
    } catch (err) {
      const errorMessage = err.response.data.message;
      swalStyled.fire({
        icon: 'error',
        title: 'Oops... Please try again',
        text: errorMessage,
      });
    }
  };
}
