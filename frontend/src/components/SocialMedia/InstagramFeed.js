import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import { getInfluencer } from "../../actions/influencers";
// TODO
export class InstagramFeed extends Component {
  static propTypes = {
    influencer: PropTypes.object.isRequired,
    getInfluencer: PropTypes.func.isRequired
  };
  componentDidMount() {
    console.log("test InstagramFeed : ");
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
    const hasInstagram = instagram !== undefined && instagram.length !== 0;
    return (
      <Container>
        <Container maxWidth="lg" component="main">
          Test Instagram Feed {id} {first_name} {last_name}
          {hasInstagram && instagram[0].handle}
        </Container>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  influencer: state.influencers.influencer
});

export default connect(mapStateToProps, { getInfluencer })(
  withWidth()(InstagramFeed)
);
