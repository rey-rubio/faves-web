import { Home, PeopleAlt } from "@material-ui/icons";
// import HomePage from "../pages/Home/HomePage";
// import ProfilePage from "../pages/Profile/ProfilePage";

export const MainNavbarRoutes = [
  {
    path: "/",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Home
    // component: HomePage
  },
  {
    path: "/",
    sidebarName: "Influencers",
    navbarName: "Influencers",
    icon: PeopleAlt
    // component: ProfilePage
  }
];
export const UserNavbarRoutes = [
  {
    path: "/",
    sidebarName: "Login",
    navbarName: "Login",
    icon: PeopleAlt
    // component: ProfilePage
  },
  {
    path: "/",
    sidebarName: "Logout",
    navbarName: "Logout",
    icon: PeopleAlt
    // component: ProfilePage
  }
];

export default MainNavbarRoutes;
