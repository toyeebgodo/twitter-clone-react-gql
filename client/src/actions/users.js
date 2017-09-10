export function login() {
  return {
    type: 'LOGIN'
  }
}

export function getUserInfo(info) {
  return {
    type: 'GET_USER_INFO',
    info
  }
}

export function logout() {
  return async (dispatch) => {
    try {
      // remove token

      return dispatch({
        type: 'LOGOUT'
      })
    } catch (error) {
      throw error;
    }
  }
}