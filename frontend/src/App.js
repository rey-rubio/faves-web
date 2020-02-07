import React from "react";
// import ReactDOM from "react-dom";
import SideNavbar from "./components/Navbar/SideNavbar";
import InfluencerLayout from "./containers/InfluencerLayout";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes/routes";
import { Provider } from "react-redux";
import store from "../src/store";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: {
      main: "#E8D7F1"
    }
  }
});
function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Grid container spacing={2}>
              <Grid item md={1.5}>
                <SideNavbar />
              </Grid>
              <Grid item md={9}>
                <InfluencerLayout>
                  <BaseRouter />
                </InfluencerLayout>
              </Grid>
              <Grid item md={1.5}>
                Search
              </Grid>
            </Grid>
          </Router>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
