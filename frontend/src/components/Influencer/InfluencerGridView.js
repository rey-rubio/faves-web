import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInfluencers } from "../../actions/influencers";

import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
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
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Container from "@material-ui/core/Container";
export class InfluencerGridView extends Component {
  static propTypes = {
    influencers: PropTypes.array.isRequired,
    getInfluencers: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getInfluencers();
    console.log("test InfluencerGridView");
  }

  render() {
    return (
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {this.props.influencers.map(influencer => (
            <Grid item key={influencer} xs={12} sm={6} md={4} lg={3}>
              <InfluencerCard influencer={influencer} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  influencers: state.influencers.influencers
});

export default connect(mapStateToProps, { getInfluencers })(
  withWidth()(InfluencerGridView)
);
