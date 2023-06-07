import * as PathAction from "../PathAction";
const initialState = {
  currentUser: [],
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case PathAction.LOGIN_USER:
      state.currentUser = payload;
      break;
    default:
      return { ...state };
  }
  return { ...state };
}
