import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/userActions";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: "Login failed. Please try again."
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null
      };
    default:
      return state;
  }
};

export default userReducer;
