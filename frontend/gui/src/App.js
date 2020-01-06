import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./containers/Navbar";
import Influencers from "./components/Influencers";
import "./App.css";

import { Provider } from "react-redux";
import store from "../src/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Influencers />
      </div>
    </Provider>
  );
}

export default App;
