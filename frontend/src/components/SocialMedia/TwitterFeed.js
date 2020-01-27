import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTweets } from "../../actions/tweets";

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
// import Influencer from "./Influencer";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";
export class TweetsFeed extends Component {
  // static propTypes = {
  //   getTweets: PropTypes.func.isRequired
  // };

  componentDidMount() {
    // const influencerId = this.props.match.params.influencerId;
    console.log("test TweetsFeed ");
    // this.props.getTweets();
  }

  render() {
    return (
      <Container maxWidth="lg" component="main">
        {/* <Influencer influencer={this.props.influencer} /> */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={twitter[0].handle}
          // options={{ height: 400 }}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  //   influencer: state.influencers.influencer
});

export default connect(mapStateToProps, { getTweets })(withWidth()(TweetsView));
