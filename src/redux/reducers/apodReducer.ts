const intialState = {
  apods: [],
};

export const apodReducer = (state = intialState, { type, payload }: any) => {
  switch (type) {
    case "SHOW_APOD":
      return { ...state, apods: payload };
    default:
      return state;
  }
};
