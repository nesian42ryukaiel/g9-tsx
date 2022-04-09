// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Main from "../components/Main";
import { movePage } from "../modules/pages";

function MainContainer() {
  const { articles, loggedin } = useSelector((state: any) => ({
    articles: state.pages.articles,
    loggedin: state.membership.mlogin,
  }));
  const dispatch = useDispatch();
  const onMovePage = (page: string) => dispatch(movePage(page));
  return <Main articles={articles} loggedin={loggedin} move={onMovePage} />;
}

export default MainContainer;
