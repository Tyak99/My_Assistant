import React, { Component } from "react";
import { Sidebar, Header } from "components";
import { Route, Switch, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import dashboardRoutes from "routes/dashboard.jsx";


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

class MyDashboard extends Component {
    // componentDidMount() {
    //     if (navigator.platform.indexOf("Win") > -1) {
    //       ps = new PerfectScrollbar(this.refs.mainPanel);
    //       document.body.classList.toggle("perfect-scrollbar-on");
    //     }
    //   }
    //   componentWillUnmount() {
    //     if (navigator.platform.indexOf("Win") > -1) {
    //       ps.destroy();
    //       document.body.classList.toggle("perfect-scrollbar-on");
    //     }
    //   }
    //   componentDidUpdate(e) {
    //     if (e.history.action === "PUSH") {
    //       this.refs.mainPanel.scrollTop = 0;
    //       document.scrollingElement.scrollTop = 0;
    //     }
    //   }
    render() {
        return (
            <div className ='wrapper'>
                <Sidebar {...this.props} routes={dashboardRoutes} />
                <div className="main-panel" ref="mainPanel">
                <Header {...this.props}/>
                <Switch> 
                  <Route path = '/' exact component = {Icons}/>
                  <Route path ='/welcome' component = {Welcome}/>
                  <Route path ='/dashboard' component = {Today}/>
                  <Route path = '/icons'component = {Icons}/>
                  <Route path ='/extended-tables' component = {TableList}/>
                  <Route path ='/typography' component = {Typography}/>
                </Switch>
            </div>
            </div>
        )
    }
}


export default MyDashboard