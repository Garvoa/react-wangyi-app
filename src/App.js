import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./containers/Home"
import Worth from "./containers/Worth"
import TabBar from "./components/TabBar"
import List from "./containers/List"
import Shopping from "./containers/Shopping"
import User from "./containers/User"
export default class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/worth" component={Worth} />
          <Route path="/list" component={List} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/user" component={User} />
          <Redirect to="/home" />
        </Switch>
        <TabBar />
      </Router>






    )
  }
}


