import { id } from "date-fns/locale";
import * as PathAction from "../PathAction";
const initialState = {
  currentUser: [],
  form: [],
  campaigns: [],
  history: [],
  candidate: [],
  campaignStage: [],
  candidateList: [],
  question: [],
  campainOwner: [],
  category: [],
  type: [],
  formByid: [],
  campaignById: [],
  getcampaignById: {},
  useToAddCandidate: [],
  idForm: "",
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
    case PathAction.GET_LIST_HISTORY:
      state.history = payload;
      break;
    case PathAction.GET_LIST_CANDIDATE:
      state.candidate = payload;
      break;
    case PathAction.GET_LIST_CAMPAINGSTAGEID:
      state.campaignStage = payload;
      break;
    case PathAction.GET_LIST_CANDIDATE_CAMPAIGN:
      state.candidateList = payload;
      break;
    case PathAction.GET_LIST_QUESTIONS:
      state.question = payload;
      break;
    case PathAction.GET_CAMPAIGN_OWNER:
      state.campainOwner = payload;
      break;
    case PathAction.GET_CATEGORY:
      state.category = payload;
      break;
    case PathAction.GET_TYPE:
      state.type = payload;
      break;
    case PathAction.GET_FORM_BY_ID:
      state.formByid = payload;
      break;
    case PathAction.GET_CAMPAIGN_BY_ID:
      state.campaignById = payload;
      break;
    case PathAction.GET_LIST_CANDIDATE_ACCOUNT:
      state.useToAddCandidate = payload;
      break;
    case PathAction.GET_CAMPAIGN_ID:
      state.getcampaignById = payload;
      break;
    case PathAction.PUT_ID_FORM:
      state.idForm = payload;
      console.log(state.idForm);
      break;

    default:
      return { ...state };
  }
  return { ...state };
}
