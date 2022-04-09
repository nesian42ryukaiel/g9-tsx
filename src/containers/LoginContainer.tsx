import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginScreen from "../components/LoginScreen";
import { inputID, inputPass, login } from "../modules/membership";
import { movePage } from "../modules/pages";

function LoginContainer() {
  const { loggedin, reqid, reqpw } = useSelector((state: any) => ({
    loggedin: state.membership.mlogin,
    reqid: state.membership.mid,
    reqpw: state.membership.mpw,
  }));
  const dispatch = useDispatch();
  const onInputID = (input: string) => dispatch(inputID(input));
  const onInputPass = (input: string) => dispatch(inputPass(input));
  const onLogin = () => dispatch(login());
  const move = (page: string) => dispatch(movePage(page));
  return (
    <LoginScreen
      loggedin={loggedin}
      reqid={reqid}
      reqpw={reqpw}
      onInputID={onInputID}
      onInputPass={onInputPass}
      onLogin={onLogin}
      move={move}
    />
  );
}

export default LoginContainer;
