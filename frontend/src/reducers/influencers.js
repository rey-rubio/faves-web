import {
  GET_INFLUENCERS,
  GET_INFLUENCER,
  GET_TWEETS
} from "../actions/types.js";

const initialState = {
  influencers: [],
  influencer: {},
  tweets: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INFLUENCERS:
      return {
        ...state,
        influencers: action.payload,
        influencer: {},
        tweets: []
      };
    case GET_INFLUENCER:
      return {
        ...state,
        influencers: [],
        influencer: action.payload,
        tweets: []
      };
    case GET_TWEETS:
      return {
        ...state,
        influencers: [],
        influencer: {},
        tweets: action.payload
      };
    default:
      return state;
  }
}
