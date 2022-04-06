import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../components/Nav";
import { movePage } from "../modules/pages";
import { logout } from "../modules/membership";

function NavContainer() {
  const { articles, loggedin } = useSelector((state) => ({
    articles: state.pages.articles,
    loggedin: state.membership.mlogin,
  }));
  const dispatch = useDispatch();
  const move = (page) => dispatch(movePage(page));
  const onlogout = () => dispatch(logout());
  return (
    <Nav
      articles={articles}
      loggedin={loggedin}
      move={move}
      onlogout={onlogout}
    />
  );
}

export default NavContainer;
