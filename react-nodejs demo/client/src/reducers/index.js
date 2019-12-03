import homeReducer from "../components/home/homeReducer";
import aboutReducer from "../components/about/aboutReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  home: homeReducer,
  about: aboutReducer
});

export default rootReducer;
