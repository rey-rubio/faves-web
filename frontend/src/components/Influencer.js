import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Influencer = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.card}>
        <Link underline="none" component={RouterLink} to={`/${id}`}>
          <CardHeader align="center" title={`${first_name} ${last_name}`} />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {industry}
            </Typography>
          </CardContent>
        </Link>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="primary" />
          </IconButton>

          {hasTwitter && (
            <IconButton
              aria-label="share"
              href={`https://twitter.com/${twitter[0].handle}`}
              target="_blank"
            >
              <TwitterIcon style={{ color: "#38A1F3" }} />
            </IconButton>
          )}
          {hasYoutube && (
            <IconButton
              aria-label="share"
              href={`https://youtube.com/${youtube[0].handle}`}
              target="_blank"
            >
              <YouTubeIcon style={{ color: "#FF0000" }} />
            </IconButton>
          )}
          {hasInstagram && (
            <IconButton
              aria-label="share"
              href={`https://instagram.com/${instagram[0].handle}`}
              target="_blank"
            >
              <InstagramIcon style={{ color: "#fb3958" }} />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default Influencer;
