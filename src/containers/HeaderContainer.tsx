import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import { movePage } from "../modules/pages";
import { mediaToggle } from "../modules/media";

function HeaderContainer() {
  const { loggedin, id, colormode } = useSelector((state) => ({
    loggedin: state.membership.mlogin,
    id: state.membership.mid,
    colormode: state.media.mediaColorMode,
  }));
  const dispatch = useDispatch();
  const onMovePage = (page) => dispatch(movePage(page));
  const toggle = () => dispatch(mediaToggle());
  return (
    <Header
      loggedin={loggedin}
      id={id}
      colormode={colormode}
      moveFunc={onMovePage}
      swapcolor={toggle}
    />
  );
}

export default HeaderContainer;
