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

function App({ page, colormode, move }: AppProps) {
  const pagelist = {
    index: <MainContainer />,
    upload: <UploadContainer />,
    login: <LoginContainer />,
    signup: <SignupContainer />,
  };
  return (
    <>
      <div className="App" colormode={colormode}>
        <HeaderContainer />
        {pagelist[page]}
        <NavContainer />
        <FooterContainer />
      </div>
    </>
  );
}

export default App;
