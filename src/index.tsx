import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import AppContainer from "./containers/AppContainer";
import { pServerLink, artdata } from "./pseudoLinks/links";
import axios from "axios";
import "./css/index.css";

function configureStoreAsync() {
  return new Promise((resolve) => {
    const initColorValue = localStorage.getItem("colormode");
    const colorValue = initColorValue !== null ? initColorValue : "light";
    console.log("[DEBUG] local storage color mode:", initColorValue);
    let initialState = {
      pages: {
        currentPage: "index",
        articles: [],
      },
      media: {
        mediaColorMode: colorValue,
      },
    };
    try {
      axios
        .get(pServerLink + "/" + artdata)
        .then(function (response) {
          initialState.pages.articles = JSON.parse(
            JSON.stringify(response.data)
          );
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          const store = createStore(rootReducer, initialState);
          resolve(store);
        });
    } catch (error) {
      const store = createStore(rootReducer, initialState);
      console.log(store.getState());
      resolve(store);
    }
  });
}

configureStoreAsync().then((result) => {
  const store = result;
  console.log(store.getState());
  console.log(
    "[DEBUG] redux store color mode:",
    store.getState().media.mediaColorMode
  );
  return ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
