import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import { getInfluencer } from "../../actions/influencers";
import {
  TwitterTimelineEmbed
  // TwitterShareButton,
  // TwitterFollowButton,
  // TwitterHashtagButton,
  // TwitterMentionButton,
  // TwitterTweetEmbed,
  // TwitterMomentShare,
  // TwitterDMButton,
  // TwitterVideoEmbed,
  // TwitterOnAirButton
} from "react-twitter-embed";
export class TwitterFeed extends Component {
  static propTypes = {
    influencer: PropTypes.object.isRequired,
    getInfluencer: PropTypes.func.isRequired
  };
  componentDidMount() {
    console.log("test TwitterFeed : ");
    const influencerId = this.props.match.params.influencerId;
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
    const hasTwitter = twitter !== undefined && twitter.length !== 0;
    return (
      <Container maxWidth="lg" component="main">
        {/* <SocialMediaNavbar influencer={this.props.influencer} /> */}
        {hasTwitter && (
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitter[0].handle}
            // options={{ height: 400 }}
          />
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  influencer: state.influencers.influencer
});

export default connect(mapStateToProps, { getInfluencer })(
  withWidth()(TwitterFeed)
);
