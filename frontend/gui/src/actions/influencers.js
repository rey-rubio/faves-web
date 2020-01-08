import axios from "axios";

import { GET_INFLUENCERS, GET_INFLUENCER } from "./types";
import { createMessage, returnErrors } from "./messages";

// GET INFLUENCERS
export const getInfluencers = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/faves/influencers")
    .then(res => {
      dispatch({
        type: GET_INFLUENCERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET INFLUENCER
export const getInfluencer = influencer_id => dispatch => {
  axios
    .get(`http://127.0.0.1:8000/faves/influencers/${influencer_id}`)
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
