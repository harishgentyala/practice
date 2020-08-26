/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
//import getData from "./AboutPage";
import HomePage from "./HomePage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import Header from './Header';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
   
    return (
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const Sample = () => <div>hello</div>;

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
