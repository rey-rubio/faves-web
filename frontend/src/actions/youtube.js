import axios from "axios";

import { GET_YOUTUBE_VIDEOS } from "./types";
import { createMessage, returnErrors } from "./messages";

// GET INFLUENCERS
// GET INFLUENCER
export const getYoutubeVideos = (influencer_id, youtube_id) => dispatch => {
  axios
    .get(
      `http://192.168.99.100:8000/influencers/${influencer_id}/youtube/videos?youtube_id=${youtube_id}`
    )
    .then(res => {
      dispatch({
        type: GET_YOUTUBE_VIDEOS,
        payload: res.data
      });
      console.log("getYoutubeVideos");
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
