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
import InstagramEmbed from "react-instagram-embed";
import { YoutubeFeed } from "../SocialMedia/YoutubeFeed";
import { Container } from "@material-ui/core";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function InfluencerTabView(props) {
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
      <Container>
        <Typography>
          {first_name} {last_name}
        </Typography>
      </Container>

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
            icon={<Home style={{ color: "primary" }} />}
            label="Home"
            {...a11yProps(0)}
          />

          <Tab
            icon={<TwitterIcon style={{ color: "#38A1F3" }} />}
            label="Twitter"
            {...a11yProps(1)}
          />
          <Tab
            icon={<YouTubeIcon style={{ color: "#FF0000" }} />}
            label="YouTube"
            {...a11yProps(2)}
          />
          <Tab
            icon={<InstagramIcon style={{ color: "#fb3958" }} />}
            label="Instagram"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      {hasTwitter && (
        <TabPanel value={value} index={1}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitter[0].handle}
            // options={{ height: 400 }}
          />
        </TabPanel>
      )}
      {hasYoutube && (
        <TabPanel value={value} index={2}>
          <YoutubeFeed />
        </TabPanel>
      )}
      {hasInstagram && (
        <TabPanel value={value} index={3}>
          Instagram
        </TabPanel>
      )}
    </div>
  );
}
