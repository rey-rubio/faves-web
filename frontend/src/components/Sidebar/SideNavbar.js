import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { MenuList, MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, withRouter } from "react-router-dom";
import { MainNavbarRoutes, UserNavbarRoutes } from "../../routes/navbar-routes";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
// import { SideNavStyle } from "./SideNavbar.styles";
const drawerWidth = 240;
const sideNavStyle = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    color: "primary"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  //   toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  item: {
    color: "#000000",
    "&:hover": {
      backgroundColor: "#cc99ff",
      color: "#ffffff"
    }
  },
  toolbarTitle: {}
}));

function SideNavbar() {
  const classes = sideNavStyle();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <Typography
          variant="h5"
          color="inherit"
          noWrap
          center
          className={classes.toolbarTitle}
          href="/"
        >
          Faves
        </Typography>
        {/* <List>
            <Link to="/" style={{ textDecoration: "none" }} key="Home">
                <ListItem button className={classes.list} key="Home">
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
                </ListItem>
            </Link>
            <ListItem button href="/" className={classes.list} key="Influencers">
                <ListItemIcon>
                <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary="Influencers" />
            </ListItem>
            </List>
            <Divider />
            <List>
            <ListItem button href="/" className={classes.list} key="Login">
                <ListItemText href="/" primary="Login" />
            </ListItem>
            <ListItem button href="/" className={classes.list} key="Logout">
                <ListItemText href="/" primary="Logout" />
            </ListItem>
            </List> */}
        <MenuList>
          {MainNavbarRoutes.map((prop, key) => {
            return (
              <Link to={prop.path} style={{ textDecoration: "none" }} key={key}>
                <MenuItem
                  className={classes.item}
                  //   selected={this.activeRoute(prop.path)}
                >
                  <ListItemIcon>
                    <prop.icon />
                  </ListItemIcon>
                  <ListItemText primary={prop.sidebarName} />
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
        <Divider />
        <MenuList>
          {UserNavbarRoutes.map((prop, key) => {
            return (
              <Link to={prop.path} style={{ textDecoration: "none" }} key={key}>
                <MenuItem
                  className={classes.item}
                  //   selected={this.activeRoute(prop.path)}
                >
                  <ListItemIcon>
                    <prop.icon />
                  </ListItemIcon>
                  <ListItemText primary={prop.sidebarName} />
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Drawer>
    </div>
  );
}
export default withRouter(SideNavbar);
