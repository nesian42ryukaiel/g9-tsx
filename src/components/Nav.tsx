import React from "react";
import Article from "./Article";

function Nav({ articles, loggedin, move, onlogout }) {
  let revart = articles.slice().reverse();
  const onLogoutClick = () => {
    alert("LOGOUT!");
    onlogout();
    move("index");
  };
  return (
    <nav className="Nav">
      <div className="Nav__advertisement">
        <h4>Advertisement</h4>
      </div>
      <div className="Nav__featuredPosts">
        <h4>Featured Posts</h4>
        <div>
          <Article
            title={revart.length > 0 ? revart[0].title : "PH Title"}
            image={revart.length > 0 ? revart[0].image : "PH image"}
            text={revart.length > 0 ? revart[0].text : "PH text"}
            location="Nav__featuredPosts"
          />
        </div>
      </div>
      <div className="Nav__logoutSection">
        {loggedin ? (
          <>
            <button type="button" onClick={onLogoutClick}>
              Logout
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Nav;
