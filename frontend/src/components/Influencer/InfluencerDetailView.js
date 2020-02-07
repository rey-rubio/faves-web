import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInfluencer } from "../../actions/influencers";

// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import List from "@material-ui/core/List";
// import Grid from "@material-ui/core/Grid";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { withStyles } from "@material-ui/core/styles";
import InfluencerCard from "./InfluencerCard";
import InfluencerTabView from "./InfluencerTabView";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import SocialMediaNavbar from "../Navbar/SocialMediaNavbar";
import HomeFeed from "../SocialMedia/HomeFeed";
import TwitterFeed from "../SocialMedia/TwitterFeed";
import YoutubeFeed from "../SocialMedia/YoutubeFeed";
import InstagramFeed from "../SocialMedia/InstagramFeed";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
export class InfluencerDetailView extends Component {
  static propTypes = {
    influencer: PropTypes.object.isRequired,
    getInfluencer: PropTypes.func.isRequired
  };

  componentDidMount() {
    const influencerId = this.props.match.params.influencerId;
    console.log("test InfluencerDetailView " + influencerId);
    this.props.getInfluencer(influencerId);
  }

  render() {
    const {
      id,
      first_name,
      last_name,
      nickname,
      industry,
      level,
      twitter,
      youtube,
      instagram
    } = this.props.influencer;
    return (
      <Container maxWidth="lg" component="main">
        {id} {first_name} {last_name}
        <SocialMediaNavbar influencer={this.props.influencer} />
        <Switch>
          <Route exact path="/influencers/:influencerId" component={HomeFeed} />
          <Route
            exact
            path="/influencers/:influencerId/twitter"
            component={TwitterFeed}
          />
          <Route
            exact
            path="/influencers/:influencerId/youtube"
            component={YoutubeFeed}
          />
          <Route
            exact
            path="/influencers/:influencerId/instagram"
            component={InstagramFeed}
          />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  influencer: state.influencers.influencer
});

export default connect(mapStateToProps, { getInfluencer })(
  withWidth()(InfluencerDetailView)
);
