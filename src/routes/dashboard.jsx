import Welcome from "../containers/Welcome/Welcome";
import Today from "../containers/Today/Today";
import Login from "../containers/Login/Login";

var dashRoutes = [
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
    pro: true,
    path: "/login",
    name: "Login",
    icon: "objects_spaceship",
    component: Login
  },
];
export default dashRoutes;
