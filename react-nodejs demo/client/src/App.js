import React from "react";

import Home from "../src/components/home/HomeComponent";
import About from "../src/components/about/AboutComponent";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../src/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Router>
    </Provider>
  );
}

export default App;
