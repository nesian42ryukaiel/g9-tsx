import React from "react";
import { useSelector, useDispatch } from "react-redux";
import App from "../components/App";
import { movePage } from "../modules/pages";

function AppContainer() {
  const { currentPage, colorMode } = useSelector((state: any) => ({
    currentPage: state.pages.currentPage,
    colorMode: state.media.mediaColorMode,
  }));
  const dispatch = useDispatch();
  const move = (page: string) => dispatch(movePage(page));
  return <App page={currentPage} colormode={colorMode} move={move} />;
}

export default AppContainer;
