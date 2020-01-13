import React from "react";
import { Route } from "react-router-dom";

import InfluencerGridView from "./components/InfluencerGridView";
import Influencer from "./components/Influencer";
import InfluencerDetailView from "./components/InfluencerDetailView";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={InfluencerGridView} />
    <Route exact path="/:influencerId" component={InfluencerDetailView} />
  </div>
);

export default BaseRouter;
