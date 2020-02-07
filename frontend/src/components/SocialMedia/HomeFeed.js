import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import { getInfluencer } from "../../actions/influencers";
import SocialMediaNavbar from "../Navbar/SocialMediaNavbar";
// TODO
export class HomeFeed extends Component {
  static propTypes = {
    influencer: PropTypes.object.isRequired,
    getInfluencer: PropTypes.func.isRequired
  };
  componentDidMount() {
    console.log("test HomeFeed : ");
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
    return (
      <Container>
        <Container maxWidth="lg" component="main">
          Test Home Feed
          {id} {first_name} {last_name}
          {nickname}
          {industry}
          {level}
          {/* {twitter}
          {youtube}
          {instagram} */}
        </Container>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  influencer: state.influencers.influencer
});

export default connect(mapStateToProps, { getInfluencer })(
  withWidth()(HomeFeed)
);
