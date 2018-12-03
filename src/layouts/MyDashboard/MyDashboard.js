import React, { Component } from "react";
import { Sidebar, Header } from "components";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PerfectScrollbar from "perfect-scrollbar";
import dashboardRoutes from "routes/dashboard.jsx";
import * as authActions from '../../store/actions/auth'


import Icons from "views/Icons/Icons.jsx";
import Welcome from "../../containers/Welcome/Welcome";
import Today from "../../containers/Today/Today";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import Upgrade from "views/Upgrade/Upgrade.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import Login from "../../containers/Login/Login";


var ps;
let myRoutes = [
    {
      path: "/welcome",
      name: "Welcome",
      icon: "ui-1_bell-53",
      component: Welcome
    },
    {
      pro: true,
      path: "/login",
      name: "Login",
      icon: "objects_spaceship",
      component: Login
    },
  ];



class MyDashboard extends Component {
    componentDidMount() {
        this.props.checkAuth();
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
          ps = new PerfectScrollbar(this.refs.mainPanel);
          document.body.classList.toggle("perfect-scrollbar-on");
        }
      }
      componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
          ps.destroy();
          document.body.classList.toggle("perfect-scrollbar-on");
        }
      }
      componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
          this.refs.mainPanel.scrollTop = 0;
          document.scrollingElement.scrollTop = 0;
        }
      }
    render() {
        if(this.props.isAuthenticated) {
            myRoutes = [
                {
                    path: "/welcome",
                    name: "Welcome",
                    icon: "ui-1_bell-53",
                    component: Welcome
                  },
                  {
                    path: "/dashboard",
                    name: "Today",
                    icon: "design_app",
                    component: Today
                  },
                  { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
                  {
                    path: "/user-page",
                    name: "User Profile",
                    icon: "users_single-02",
                    component: UserPage
                  },
                  {
                    path: "/typography",
                    name: "Typography",
                    icon: "design-2_ruler-pencil",
                    component: Typography
                  },
            ]
        }
        let route = (
            <Switch>
                <Route path ='/welcome' component = {Welcome}/>
                <Route path = '/login' component = {Login}/>
                <Redirect to = '/welcome'/>
            </Switch>
        )
        if(this.props.isAuthenticated) {
            route = (
                <Switch>
                    <Route path ='/welcome' component = {Welcome}/>
                    <Route path ='/dashboard' component = {Today}/>
                    <Route path = '/icons'component = {Icons}/>
                    <Route path ='/extended-tables' component = {TableList}/>
                    <Route path ='/typography' component = {Typography}/>
                    <Redirect to = '/welcome'/>
                </Switch>
            )
        }
        return (
            <div className ='wrapper'>
                <Sidebar {...this.props} routes={myRoutes} />
                <div className="main-panel" ref="mainPanel">
                <Header {...this.props}/>
                {route}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(authActions.logout()),
        checkAuth: () => dispatch(authActions.checkAuthState())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyDashboard));