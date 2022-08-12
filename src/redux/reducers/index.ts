import { combineReducers } from "redux";
import { apodReducer } from "./apodReducer";

const reducers = combineReducers({
  allApods: apodReducer,
});

export default reducers;
