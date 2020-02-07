import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Home from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SocialMediaNavbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
  } = props.influencer;
  const hasTwitter = twitter !== undefined && twitter.length !== 0;
  const hasYoutube = youtube !== undefined && youtube.length !== 0;
  const hasInstagram = instagram !== undefined && instagram.length !== 0;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          //   aria-label="scrollable auto tabs example"
        >
          <Tab
            component={Link}
            to={`/influencers/${id}`}
            icon={<Home style={{ color: "primary" }} />}
            label="Home"
          />
          {hasTwitter && (
            <Tab
              component={Link}
              to={`/influencers/${id}/twitter`}
              icon={<TwitterIcon style={{ color: "#38A1F3" }} />}
              label="Twitter"
            />
          )}
          {hasYoutube && (
            <Tab
              component={Link}
              to={`/influencers/${id}/youtube`}
              icon={<YouTubeIcon style={{ color: "#FF0000" }} />}
              label="YouTube"
            />
          )}
          {hasInstagram && (
            <Tab
              component={Link}
              to={`/influencers/${id}/instagram`}
              icon={<InstagramIcon style={{ color: "#fb3958" }} />}
              label="Instagram"
            />
          )}
        </Tabs>
      </AppBar>
    </div>
  );
}
