import React, { Component } from "react";
import { Sidebar, Header } from "components";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PerfectScrollbar from "perfect-scrollbar";
import * as authActions from '../../store/actions/auth'


import Welcome from "../../containers/Welcome/Welcome";
import Today from "../../containers/Today/Today";
import Login from "../../containers/Login/Login";
import Task from '../../containers/Task/Task';
import Logout from "../../containers/Login/Logout";
import Register from '../../containers/Login/Register';
import NotFoundPage from "../../components/NotFound/NotFoundPage";
import Footer from "../../components/Footer/Footer";


var ps;




class MyDashboard extends Component {
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
          ps = new PerfectScrollbar(this.refs.mainPanel);
          document.body.classList.toggle("perfect-scrollbar-on");
        }
        this.props.checkAuth();
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
              icon: "design_app",
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
                    icon: "design_app",
                    component: Welcome
                  },
                  {
                    path: "/dashboard",
                    name: "Today",
                    icon: "arrows-1_minimal-down",
                    component: Today
                  },
                  {
                    path: "/task",
                    name: "Task",
                    icon: "ui-1_bell-53",
                    component: Task
                  },
                  {
                    pro: true,
                    path: "/logout",
                    name: "Logout",
                    icon: "ui-1_simple-remove",
                    component: Logout
                  },
                  { redirect: true, path: "/", pathTo: "/welcome", name: "Dashboard" }
            ]
        }
        let route = (
            <Switch>
                <Route path ='/welcome' exact component = {Welcome}/>
                <Route path = '/login' component = {Login}/>
                <Route path = '/register' component = {Register}/>
                <Route component={NotFoundPage}/>
            </Switch>
        )
        if(this.props.isAuthenticated) {
            route = (
                <Switch>
                    <Route path ='/welcome' exact component = {Welcome}/>
                    <Route path ='/dashboard' component = {Today}/>
                    <Route path ='/task' component = {Task}/>
                    <Route path = '/login' component = {Login}/>
                    <Route path = '/register' component = {Register}/>
                    <Route path ='/logout' component = {Logout}/>
                    <Route component = {NotFoundPage}/>
                </Switch>
            )
        }
        return (
            <div className ='wrapper'>
                <Sidebar {...this.props} routes={myRoutes} />
                <div className="main-panel" ref="mainPanel">
                <Header {...this.props}/>
                {route}
                <Footer/>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
        username: state.auth.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(authActions.logout()),
        checkAuth: () => dispatch(authActions.checkAuthState())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyDashboard));