export const login = () => {
  return {
    type: 'LOGIN',
  };
};

export const getUserInfo = info => {
  return {
    type: 'GET_USER_INFO',
    info,
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      localStorage.removeItem('token');
      return dispatch({
        type: 'LOGOUT',
      });
    } catch (error) {
      throw error;
    }
  };
};
