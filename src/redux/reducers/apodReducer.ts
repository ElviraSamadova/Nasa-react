import { IAllApods } from "./index";

export const initialState: IAllApods = {
  apods: [],
};

export const apodReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "SHOW_APOD":
      return { ...state, apods: payload };
    default:
      return state;
  }
};
