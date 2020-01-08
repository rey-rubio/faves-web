import { GET_INFLUENCERS, GET_INFLUENCER } from "../actions/types.js";

const initialState = {
  influencers: [],
  influencer: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INFLUENCERS:
      return {
        ...state,
        influencers: action.payload,
        influencer: {}
      };
    case GET_INFLUENCER:
      return {
        ...state,
        influencers: [],
        influencer: action.payload
      };
    default:
      return state;
  }
}
