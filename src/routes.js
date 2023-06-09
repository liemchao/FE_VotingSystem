// const routes = [
//   {
//     type: "collapse",
//     name: "HeaderOne",
//     key: "headerone",
//     route: "/headerone",
//     component: <HeaderOne />,
//   },

//   {
//     type: "collapse",
//     name: "Dashboard",
//     key: "dashboard",
//     icon: <Icon fontSize="small">dashboard</Icon>,
//     route: "/dashboard",
//     component: <Dashboard />,
//   },

//   {
//     type: "collapse",
//     name: "Sign In",
//     key: "sign-in",
//     icon: <Icon fontSize="small">login</Icon>,
//     route: "/authentication/sign-in",
//     component: <SignIn />,
//   },
//   {
//     type: "collapse",
//     name: "Sign Up",
//     key: "sign-up",
//     icon: <Icon fontSize="small">assignment</Icon>,
//     route: "/authentication/sign-up",
//     component: <SignUp />,
//   },
// ];

// export default routes;
import React from "react";
import { useRoutes } from "react-router-dom";
import PrimarySearchAppBar from "layouts/page/LangdingPage";
import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import HeaderOne from "layouts/page/LangdingPage";

// @mui icons
import Icon from "@mui/material/Icon";
import Test from "layouts/authentication/sign-up/Test";
import DashboardLayout from "components/Layout/DashboardLayout";
import UserList from "layouts/page/UserList";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HeaderOne />,
    },
    {
      path: "/authentication/sign-in",
      element: <SignIn />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [{ path: "user", element: <UserList /> }],
    },
  ]);
}
