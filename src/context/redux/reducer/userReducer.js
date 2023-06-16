import * as PathAction from "../PathAction";
const initialState = {
  currentUser: [],
  form: [],
  campaigns: [],
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case PathAction.LOGIN_USER:
      state.currentUser = payload;
      break;
    case PathAction.GET_LIST_FORM:
      state.form = payload;
      break;
    case PathAction.GET_LIST_CAMPAIGNS:
      state.campaigns = payload;
      break;
    default:
      return { ...state };
  }
  return { ...state };
}
