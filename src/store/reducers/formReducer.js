import { EMAIL, NAME } from "../actions/emailAction";

const initial = {
  Email: "",
  Name: "",
};

const formReducer = (state = initial, action) => {
  console.log(state);
  if (action.type === EMAIL) {
    return { ...state, Email: action.payLoad };
  } else if (action.type === NAME) {
    return { ...state, Name: action.payLoad };
  }
  return state;
};

export default formReducer;
