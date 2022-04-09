import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavContainer from "../containers/NavContainer";
import FooterContainer from "../containers/FooterContainer";
import MainContainer from "../containers/MainContainer";
import UploadContainer from "../containers/UploaderContainer";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";

/**
 * https://react.vlpt.us/using-typescript/02-ts-react-basic.html
 *
 * How to make TypeScript components
 */

type AppProps = {
  page: string;
  colormode: string;
  move: Function;
};

type PageListType = {
  [index: string]: JSX.Element; // Index Signature: let's you use string index
  index: JSX.Element;
  upload: JSX.Element;
  login: JSX.Element;
  signup: JSX.Element;
};

function App({ page, colormode, move }: AppProps) {
  const pagelist: PageListType = {
    index: <MainContainer />,
    upload: <UploadContainer />,
    login: <LoginContainer />,
    signup: <SignupContainer />,
  };
  return (
    <>
      <div className="App" data-colormode={colormode}>
        <HeaderContainer />
        {pagelist[page]}
        <NavContainer />
        <FooterContainer />
      </div>
    </>
  );
}

export default App;
