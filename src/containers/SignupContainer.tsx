import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SignupScreen from "../components/SignupScreen";
import { inputID, inputPass, inputName, signup } from "../modules/membership";
import { movePage } from "../modules/pages";

function SignupContainer() {
  const { loggedin, reqid, reqpw, reqnm } = useSelector((state: any) => ({
    loggedin: state.membership.mlogin,
    reqid: state.membership.mid,
    reqpw: state.membership.mpw,
    reqnm: state.membership.mname,
  }));
  const dispatch = useDispatch();
  const onInputID = (input: string) => dispatch(inputID(input));
  const onInputPass = (input: string) => dispatch(inputPass(input));
  const onInputName = (input: string) => dispatch(inputName(input));
  const onSignup = () => dispatch(signup());
  const move = (page: string) => dispatch(movePage(page));
  return (
    <SignupScreen
      loggedin={loggedin}
      reqid={reqid}
      reqpw={reqpw}
      reqnm={reqnm}
      onInputID={onInputID}
      onInputPass={onInputPass}
      onInputName={onInputName}
      onSignup={onSignup}
      move={move}
    />
  );
}

export default SignupContainer;
