import React from "react";
// import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import axios from "axios";
import rootReducer from "./modules/rootReducer";
import AppContainer from "./containers/AppContainer";
import { pServerLink, artdata } from "./pseudoLinks/links";
import "./css/index.css";
// import { resolve } from "node:path/win32";

const configureStoreAsync = async () => {
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
    const response = await axios.get(pServerLink + "/" + artdata);
    initialState.pages.articles = JSON.parse(JSON.stringify(response.data));
    const store = createStore(rootReducer, initialState);
    return Promise.resolve(store);
  } catch (error) {
    console.log(error);
    const store = createStore(rootReducer, initialState);
    return Promise.resolve(store);
  }
};

const renderAppAsync = async () => {
  const store = await configureStoreAsync();
  const container = document.getElementById("root");
  const root = ReactDOMClient.createRoot(container);
  console.log(store.getState());
  console.log(
    "[DEBUG] redux store color mode:",
    store.getState().media.mediaColorMode
  );
  return root.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
};

renderAppAsync();

// configureStoreAsync().then((result: any) => {
//   // above line collides with Webpack
//   const store = result;
//   const container: any = document.getElementById("root");
//   const root = ReactDOMClient.createRoot(container);
//   console.log(store.getState());
//   console.log(
//     "[DEBUG] redux store color mode:",
//     store.getState().media.mediaColorMode
//   );
//   return root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <AppContainer />
//       </Provider>
//     </React.StrictMode>
//   );
// });

// function configureStoreAsync1() {
//   return new Promise((resolve) => {
//     const initColorValue = localStorage.getItem("colormode");
//     const colorValue = initColorValue !== null ? initColorValue : "light";
//     console.log("[DEBUG] local storage color mode:", initColorValue);
//     let initialState = {
//       pages: {
//         currentPage: "index",
//         articles: [],
//       },
//       media: {
//         mediaColorMode: colorValue,
//       },
//     };
//     try {
//       axios
//         .get(pServerLink + "/" + artdata)
//         .then(function (response) {
//           initialState.pages.articles = JSON.parse(
//             JSON.stringify(response.data)
//           );
//         })
//         .catch(function (error) {
//           console.log(error);
//         })
//         .finally(function () {
//           const store = createStore(rootReducer, initialState);
//           resolve(store);
//         });
//     } catch (error) {
//       const store = createStore(rootReducer, initialState);
//       console.log(store.getState());
//       resolve(store);
//     }
//   });
// }
