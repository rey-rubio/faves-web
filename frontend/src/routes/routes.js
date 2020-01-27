import React from "react";
import { Route } from "react-router-dom";

import InfluencerGridView from "../components/Influencer/InfluencerGridView";
import InfluencerDetailView from "../components/Influencer/InfluencerDetailView";
import InfluencerCard from "../components/Influencer/InfluencerCard";
// import TweetsFeed from "./components/TweetsFeed";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={InfluencerGridView} />
    <Route exact path="/:influencerId" component={InfluencerDetailView} />
    {/* <Route exact path="/tweets" component={TweetsView} /> */}
  </div>
);

export default BaseRouter;
