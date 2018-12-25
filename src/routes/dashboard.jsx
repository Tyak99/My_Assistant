import Icons from "views/Icons/Icons.jsx";
import Welcome from "../containers/Welcome/Welcome";
import Today from "../containers/Today/Today";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
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
];
export default dashRoutes;
