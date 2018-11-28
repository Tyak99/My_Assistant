import React, { Component } from "react";
import { Sidebar, Header } from "components";
import { Route, Switch, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import dashboardRoutes from "routes/dashboard.jsx";

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
                {dashboardRoutes.map((prop, key) => {
              if (prop.collapse) {
                return prop.views.map((prop2, key2) => {
                  return (
                    <Route
                      path={prop2.path}
                      component={prop2.component}
                      key={key2}
                    />
                  );
                });
              }
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
            </div>
            </div>
        )
    }
}
export default MyDashboard