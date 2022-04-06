import React from "react";
import checkAuth from "../modules/checkAuth";

export default function LoginScreen({
  loggedin,
  reqid,
  reqpw,
  onInputID,
  onInputPass,
  onLogin,
  move,
}) {
  const onChangeUserID = (e) => {
    onInputID(e.target.value);
  };
  const onChangeUserPW = (e) => {
    onInputPass(e.target.value);
  };
  const onClickLogin = () => {
    if (loggedin) {
      alert("Already logged in!");
      return;
    } else {
      const loginAuth = [false, false, false];
      checkAuth(reqid, reqpw, "", loginAuth).then((res) => {
        if (loginAuth[0] && loginAuth[1]) {
          onLogin();
        } else {
          alert("Login failed!");
        }
      });
    }
  };
  const ifLoggedIn = () => {
    if (loggedin) {
      console.log("passed!");
      move("index");
    }
  };
  const cancelAndGoBack = () => {
    move("index");
  };
  return (
    <main className="LoginScreen centralize corefunc">
      <div className="focusBox">
        {loggedin ? (
          <>
            <div>
              <p>Success!</p>
              <p>
                <strong onClick={ifLoggedIn} style={{ color: "#aaaaff" }}>
                  Click
                </strong>{" "}
                to return to the main page.
              </p>
            </div>
          </>
        ) : (
          <>
            <h4>Log In to G9</h4>
            <div className="signup__memberInput">
              <div>
                <input
                  type="text"
                  className="user_id--input"
                  placeholder="ID"
                  onChange={onChangeUserID}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="password--input"
                  placeholder="Password"
                  onChange={onChangeUserPW}
                />
              </div>
            </div>
            <div className="memberInput">
              <span>
                <button className="cancel--button" onClick={cancelAndGoBack}>
                  Cancel
                </button>
                <button
                  className="login--button focus--button"
                  onClick={onClickLogin}
                >
                  Login
                </button>
              </span>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
