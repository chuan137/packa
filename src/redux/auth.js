const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const initState = {
  isAuthenticating: false,
  isAuthenticated: false
}

/* reducer */
/*export const loginEpic = action$ =>
  action$.ofType(LOGIN_REQUEST)
    .map(action => authApi('/auth/local', action.username, action.password))
    .mapTo(token => {type: LOGIN_SUCCESS, token});
*/

export default function authReducers(state = initState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { isAuthenticating: true, ...initState };
    case LOGIN_SUCCESS:
      return { isAuthenticated: true, ...initState };
    case LOGIN_ERROR:
      return initState;
    default:
      return state;
  }
};


/* actions */
export const requestLogin =
/* eslint-disable-next-line */
  (username, password) => ({ type: LOGIN_REQUEST, username, password });

export const loginSuccess =
  (token) => ({ type: LOGIN_SUCCESS, token });

export const loginFailed =
  (message) => ({ type: LOGIN_ERROR, message });
