import {
  GET_INFLUENCERS,
  GET_INFLUENCER,
  GET_TWEETS,
  GET_YOUTUBE_VIDEOS
} from "../actions/types.js";

const initialState = {
  influencers: [],
  influencer: {},
  tweets: [],
  youtube_videos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INFLUENCERS:
      return {
        ...state,
        influencers: action.payload
      };
    case GET_INFLUENCER:
      return {
        ...state,
        influencer: action.payload
      };
    case GET_TWEETS:
      return {
        ...state,
        tweets: action.payload
      };
    case GET_YOUTUBE_VIDEOS:
      return {
        ...state,
        youtube_videos: action.payload
      };
    default:
      return state;
  }
}
