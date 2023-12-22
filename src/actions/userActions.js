// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

// Action Creators
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const logout = () => ({
  type: LOGOUT
});

// Async Action Creator
export const login = (loginData) => {
  return (dispatch) => {
    // Retrieve login information from local storage
    const storedLoginData = JSON.parse(localStorage.getItem("user"));

    if (
      storedLoginData &&
      storedLoginData.Email === loginData.Email &&
      storedLoginData.Password === loginData.Password
    ) {
      // If login information matches, dispatch the login success action
      const user = {
        username: storedLoginData.Name
        // Other user details if available
      };
      dispatch(loginSuccess(user));
    } else {
      // If login information does not match, dispatch the login failure action
      dispatch(loginFailure());
    }
  };
};
