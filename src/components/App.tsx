import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import NavContainer from "../containers/NavContainer";
import FooterContainer from "../containers/FooterContainer";
import MainContainer from "../containers/MainContainer";
import UploadContainer from "../containers/UploaderContainer";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";

function App({ page, colormode, move }) {
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
