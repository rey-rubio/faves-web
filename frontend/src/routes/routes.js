import React from "react";
import { Route } from "react-router-dom";
import HomeView from "../components/Home/HomeView";
import InfluencerGridView from "../components/Influencer/InfluencerGridView";
import InfluencerDetailView from "../components/Influencer/InfluencerDetailView";

const BaseRouter = () => (
  <div>
    <Route exact path="/home" component={HomeView} />
    <Route exact path="/influencers" component={InfluencerGridView} />
    <Route
      exact
      path="/influencers/:influencerId"
      component={InfluencerDetailView}
    />
    <Route
      exact
      path="/influencers/:influencerId/twitter"
      component={InfluencerDetailView}
    />
    <Route
      exact
      path="/influencers/:influencerId/youtube"
      component={InfluencerDetailView}
    />
    <Route
      exact
      path="/influencers/:influencerId/instagram"
      component={InfluencerDetailView}
    />
    {/* <Route exact path="/tweets" component={TweetsView} /> */}
  </div>
);

export default BaseRouter;
