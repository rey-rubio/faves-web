import axios from "axios";

import { GET_TWEETS } from "./types";
import { createMessage, returnErrors } from "./messages";

// GET TWEETS
export const getTweets = () => dispatch => {
  axios
    .get("http://192.168.99.100:8000/influencers/tweets")
    .then(res => {
      dispatch({
        type: GET_TWEETS,
        payload: res.data
      });
      console.log("getTweets");
    })

    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
