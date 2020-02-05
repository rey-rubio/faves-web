import { Home, PeopleAlt } from "@material-ui/icons";
// import HomePage from "../pages/Home/HomePage";
// import ProfilePage from "../pages/Profile/ProfilePage";

export const MainNavbarRoutes = [
  {
    path: "/home",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Home
    // component: HomePage
  },
  {
    path: "/influencers",
    sidebarName: "Influencers",
    navbarName: "Influencers",
    icon: PeopleAlt
    // component: ProfilePage
  }
];
export const UserNavbarRoutes = [
  {
    path: "/home",
    sidebarName: "Login",
    navbarName: "Login",
    icon: PeopleAlt
    // component: HomePage
  },
  {
    path: "/home",
    sidebarName: "Logout",
    navbarName: "Logout",
    icon: PeopleAlt
    // component: HomePage
  }
];

export default MainNavbarRoutes;
