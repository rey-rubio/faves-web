import React, { Component } from "react";
import PropTypes from "prop-types";
import { getYoutubeVideos } from "../../actions/youtube";
import { getInfluencer } from "../../actions/influencers";
import { connect } from "react-redux";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import YouTube from "react-youtube";
export class YoutubeFeed extends Component {
  static propTypes = {
    influencer: PropTypes.object.isRequired,
    getInfluencer: PropTypes.func.isRequired,
    youtube_videos: PropTypes.array.isRequired,
    getYoutubeVideos: PropTypes.func.isRequired
  };

  componentDidMount() {
    const influencerId = this.props.match.params.influencerId;
    this.props.getInfluencer(influencerId);
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
    console.log("test YoutubeFeed id: " + id + " youtubeId: " + youtube[0].id);
    this.props.getYoutubeVideos(id, youtube[0].id);
  }
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        // autoplay: 0
      }
    };
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
        {/* <SocialMediaNavbar influencer={this.props.influencer} /> */}
        <Grid container spacing={5} alignItems="flex-end">
          {this.props.youtube_videos.map(youtube_video => (
            <Grid item key={youtube_video} lg={9}>
              <YouTube
                videoId={youtube_video.youtube_video_id}
                opts={opts}
                onReady={this._onReady}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
const mapStateToProps = state => ({
  influencer: state.influencers.influencer,
  youtube_videos: state.influencers.youtube_videos
});

export default connect(mapStateToProps, { getInfluencer, getYoutubeVideos })(
  withWidth()(YoutubeFeed)
);
