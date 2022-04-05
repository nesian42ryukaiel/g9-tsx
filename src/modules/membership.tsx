
import Base64 from "./Base64";

const INPUT_ID = "membership/ID";
const INPUT_PASS = "membership/PASS";
const INPUT_NAME = "membership/NAME";
const LOGIN = "membership/LOGIN";
const LOGOUT = "membership/LOGOUT";
const SIGNUP = "membership/SIGNUP";

export const inputID = (task: string) => ({
  type: INPUT_ID,
  payload: {
    task,
  },
});
export const inputPass = (task: string) => {
  task = Base64.encode(task);
  return {
    type: INPUT_PASS,
    payload: {
      task,
    },
  };
};
export const inputName = (task: string) => ({
  type: INPUT_NAME,
  payload: {
    task,
  },
});
export const login = () => ({
  type: LOGIN,
});
export const logout = () => ({
  type: LOGOUT,
});
export const signup = () => ({
  type: SIGNUP,
});

const initialState = {
  mlogin: false,
  mid: "",
  mpw: "",
  mname: "",
};

export default function membership(state = initialState, action: object) {
  switch (action.type) {
    case INPUT_ID:
      return {
        ...state,
        mid: action.payload.task,
      };
    case INPUT_PASS:
      return {
        ...state,
        mpw: action.payload.task,
      };
    case INPUT_NAME:
      return {
        ...state,
        mname: action.payload.task,
      };
    case LOGIN:
      if (state.mlogin === true) {
        alert("You are already logged in!");
        return state;
      } else {
        return {
          ...state,
          mlogin: true,
          mpw: "",
        };
      }
    case LOGOUT:
      if (state.mlogin !== true) {
        alert("You must be logged in to log out!");
        return state;
      } else {
        alert(`Good bye, ${state.mname}!`);
        return {
          ...state,
          mlogin: false,
          mid: "",
          mpw: "",
          mname: "",
        };
      }
    case SIGNUP:
      if (state.mlogin === true) {
        alert("You cannot sign up while logged in!");
        return state;
      } else {
        alert(`Welcome to G9, ${state.mname}!`);
        return {
          ...state,
          mid: "",
          mpw: "",
          mname: "",
        };
      }
    default:
      return state;
  }
}
