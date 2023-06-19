import React from "react";
import { Form, Navigate, useNavigate, useRoutes } from "react-router-dom";
// import PrimarySearchAppBar from "layouts/page/LangdingPage";
// import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
import HeaderOne from "layouts/page/LangdingPage";
import jwt_decode from "jwt-decode";

// @mui icons

import DashboardLayout from "components/Layout/DashboardLayout";
import UserList from "layouts/page/UserList";
import AccountPage from "layouts/page/account/AccountPage";
// import JoinCampain from "./layouts/page/user/JoinCampaign";
import CandidateList from "layouts/page/user/Candidate";
import FeedBack from "layouts/page/user/FeedBack";
import CampaignList from "layouts/page/user/Campaign";
import CampaignOwenrList from "layouts/page/user/CampaignOwner";

import ListQuestion from "layouts/page/user/Form/Voter/List Question/ListQuetion";
import DetailCandidate from "layouts/page/user/Form/Voter/Detail Voter/DetailVoter";
// import FormList from "layouts/page/user/Form";
// import JoinCampain from "layouts/page/user/Form/Voter/List Candidate/ListCandidate";
import HistoryUser from "layouts/page/user/Form/Voter/History/History";
import FormVote from "layouts/page/user/Form/Voter/Form";
import AllCampaignList from "layouts/page/AllCampaign";
import Text from "layouts/page/Text";
export default function Router() {
  const ProtectedRouteAuthen = ({ roles, children }) => {
    const token = localStorage.getItem("token");

    try {
      const decoded = jwt_decode(token);
      if (token === null) {
        return <Navigate to="/" replace />;
      } else if (token && !decoded.RoleName) {
        return <Navigate to="/" replace />;
      } else if (roles.includes(decoded.RoleName)) {
        return <>{children}</>;
      }
    } catch (error) {
      return <Navigate to="/" replace />;
    }
    return <Navigate to="/" replace />;
  };
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
      path: "/admin",
      element: (
        <ProtectedRouteAuthen roles="admin">
          <DashboardLayout />
        </ProtectedRouteAuthen>
      ),
      children: [
        {
          path: "dashboard",
          element: <UserList />,
        },
        {
          path: "account",
          element: <AccountPage />,
        },
      ],
    },
    {
      path: "/user",
      element: (
        <ProtectedRouteAuthen roles="user">
          <DashboardLayout />
        </ProtectedRouteAuthen>
      ),
      children: [
        {
          path: "form",
          element: <ListQuestion />,
        },
        {
          path: "getcampaign",
          element: <CampaignList />,
        },
        {
          path: "campaign",
          element: <Text />,
        },
        {
          path: "history",
          element: <HistoryUser />,
        },

        {
          path: "allcampign",
          element: <AllCampaignList />,
        },
        {
          path: "campaignowner",
          element: <CampaignOwenrList />,
        },
        {
          path: "candidate",
          element: <CandidateList />,
        },

        {
          path: "joincampain",
          element: <FormVote />,
        },
        {
          path: "feedback",
          element: <FeedBack />,
        },
        {
          path: "template",
          element: <FeedBack />,
        },
        {
          path: "detailcandidate",
          element: <DetailCandidate />,
        },
      ],
    },
  ]);
}
