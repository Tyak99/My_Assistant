import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {expense } from "./store/reducers/expense";
import { auth } from './store/reducers/auth';
// import {reducer} from "./store/reducers/reducer";
import thunk from 'redux-thunk';


import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";

import indexRoutes from "routes/index.jsx";

const rootReducer = combineReducers({
  exp: expense,
  auth: auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))
const hist = createBrowserHistory();

const app = (
  <Provider store = {store}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
       </Router>
  </Provider>
)

ReactDOM.render(app,document.getElementById("root"));
