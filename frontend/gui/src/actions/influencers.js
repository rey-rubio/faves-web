import axios from "axios";

import { GET_INFLUENCERS } from "./types";
import { createMessage, returnErrors } from "./messages";

// GET INFLUENCERS
export const getInfluencers = () => dispatch => {
  axios
    .get("http://127.0.0.1:8000/api/")
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
