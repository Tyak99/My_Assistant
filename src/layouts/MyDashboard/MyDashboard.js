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
import Task from '../../containers/Task/Task';
import Logout from "../../containers/Login/Logout";


var ps;




class MyDashboard extends Component {
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
          ps = new PerfectScrollbar(this.refs.mainPanel);
          document.body.classList.toggle("perfect-scrollbar-on");
        }
        this.props.checkAuth();
        console.log("MyD")
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
                  {
                    path: "/task",
                    name: "Task",
                    icon: "ui-1_bell-53",
                    component: Task
                  },
                  { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
                  {
                    path: "/user-page",
                    name: "User Profile",
                    icon: "users_single-02",
                    component: UserPage
                  },
                  {
                    path: "/logout",
                    name: "Logout",
                    icon: "design-2_ruler-pencil",
                    component: Logout
                  },
            ]
        }
        let route = (
            <Switch>
                <Route path ='/welcome' component = {Welcome}/>
                <Route path = '/login' component = {Login}/>
            </Switch>
        )
        if(this.props.isAuthenticated) {
            route = (
                <Switch>
                    <Route path ='/welcome' component = {Welcome}/>
                    <Route path ='/dashboard' component = {Today}/>
                    <Route path ='/task' component = {Task}/>
                    <Route path = '/icons'component = {Icons}/>
                    <Route path ='/logout' component = {Logout}/>
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