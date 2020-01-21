import React from "react";
// import ReactDOM from "react-dom";
import Navbar from "./containers/Navbar";
import InfluencerLayout from "./containers/InfluencerLayout";

import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

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
          <Navbar />
          <Router>
            <InfluencerLayout>
              <BaseRouter />
            </InfluencerLayout>
          </Router>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
