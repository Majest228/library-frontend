import { SET_USER } from '../actionTypes';

const initialValues = {
  auth: false,
  info: null,
};

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        auth: action.payload !== null,
        info: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
