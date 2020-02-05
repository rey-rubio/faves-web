import axios from "axios";

import { GET_YOUTUBE_VIDEOS } from "./types";
import { createMessage, returnErrors } from "./messages";

// GET INFLUENCERS
// GET INFLUENCER
export const getYoutubeVideos = influencer_id => dispatch => {
  axios
    .get(`http://192.168.99.100:8000/influencers/${influencer_id}`)
    .then(res => {
      dispatch({
        type: GET_INFLUENCER,
        payload: res.data
      });
      console.log("getInfluencer");
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
