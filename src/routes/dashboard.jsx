import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Welcome from "../containers/Welcome/Welcome";
import Today from "../containers/Today/Today";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import Upgrade from "views/Upgrade/Upgrade.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
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
  { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
  { path: "/maps", name: "Maps", icon: "location_map-big", component: Maps },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography
  },
  {
    pro: true,
    path: "/login",
    name: "Login",
    icon: "objects_spaceship",
    component: Login
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
