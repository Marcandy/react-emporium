import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './store';
import {Router, Route, browserHistory} from "react-router";



import App from "./components/App/App.js"

document.addEventListener( "DOMContentLoaded", () => {
  const reactNode = document.getElementById( "react-node" );

  ReactDOM.render(
    <Provider store= {store}>
        <Router history={browserHistory}>
          <Route path="/" component= { App }></Route>
        </Router>
    </Provider>
  , reactNode );
})
