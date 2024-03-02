import { EMAIL, NAME } from "./emailAction";

export const email = (data) => {
  return {
    type: EMAIL,
    payload: data,
  };
};

export const name = (data) => {
  return {
    type: NAME,
    payload: data,
  };
};
