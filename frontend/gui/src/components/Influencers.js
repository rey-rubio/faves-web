import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInfluencers } from "../actions/influencers";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import Influencer from "./Influencer";

export class Influencers extends Component {
  static propTypes = {
    influencers: PropTypes.array.isRequired,
    getInfluencers: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getInfluencers();
    console.log("test");
  }

  render() {
    return (
      <Grid>
        {/* {this.props.influencers.map(influencer => (
          <Card>
            <CardHeader
              title={`${influencer.first_name} ${influencer.last_name} `}
            />
            <CardMedia
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {influencer.industry}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))} */}
        <Influencer testing={this.props.influencers} />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  influencers: state.influencers.influencers
});

export default connect(mapStateToProps, { getInfluencers })(Influencers);
