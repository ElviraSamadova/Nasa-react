import { combineReducers } from "redux";
import { apodReducer } from "./apodReducer";

export interface IApodItem {
  title: string;
  url: string;
}

export interface IAllApods {
  apods: IApodItem[];
}

export interface IStore {
  allApods: IAllApods;
}

const reducers = combineReducers<IStore>({
  allApods: apodReducer,
});

export default reducers;
