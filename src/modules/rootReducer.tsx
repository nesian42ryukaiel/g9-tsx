import { combineReducers } from "redux";
import editor from "./editor";
import membership from "./membership";
import pages from "./pages";
import media from "./media";

const rootReducer = combineReducers({
  editor,
  media,
  membership,
  pages,
});

export default rootReducer;
