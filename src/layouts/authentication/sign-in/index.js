import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components

import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
// import MDButton from "components/MDButton";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
// Authentication layout components
// Images
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Button, Typography } from "@mui/material";
const config = {
  apiKey: "AIzaSyDFsJS8u9XsIClfCOGZJQ4vg7JsJFSNA7Q",
  authDomain: "fvssystemswp409.firebaseapp.com",
  projectId: "fvssystemswp409",
  storageBucket: "fvssystemswp409.appspot.com",
  messagingSenderId: "153807743798",
  appId: "1:153807743798:web:388557922974c341b16197",
  measurementId: "G-DNJR3ZB3FW",
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/dashboard",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{ backgroundColor: "#F6911B", textAlign: "center" }}>
        <Typography sx={{ marginTop: "5%" }} variant="h1" color="#FFFFFF">
          Welcome to our system
        </Typography>
        <Typography sx={{ marginTop: "5%" }} variant="body2" color="#CBD5E1  ">
          Hệ thống cung cấp hỗ trợ tạo chiến dịch dánh giá phù hợp với nhiều mục tiêu.
        </Typography>
        <Typography sx={{ marginTop: "77%" }} variant="body2" color="#FFFFFF">
          &quot;We love Landing folio! Our desiger were using it for their project, so we alreay
          knew what kid of desgin they want&quot;
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: "#FDF8EB", textAlign: "center" }}>
        <Typography sx={{ marginTop: "5%" }} variant="h1" color="#090914">
          Join System
        </Typography>
        <Typography sx={{ marginTop: "2%" }} variant="body2" color="#090914">
          Chào mừng bạn đến với hệ thống.
        </Typography>
        <form style={{ textAlign: "center", marginTop: "10%" }}>
          <span style={{ marginLeft: "-40%" }}>Email Address</span>
          <br />
          <TextField sx={{ width: "400px" }}></TextField> <br />
          <span style={{ marginLeft: "-45%" }}>Password</span> <br />
          <TextField sx={{ width: "400px" }} type="password"></TextField> <br />
          <Checkbox sx={{ marginLeft: "3%" }}></Checkbox>
          Remember Me
          <a href="#" style={{ marginLeft: "10%" }}>
            Forgot Password ?
          </a>
          <br />
          <Button
            sx={{ marginRight: "40%", backgroundColor: "#F6911B" }}
            color="white"
            size="large"
          >
            Login
          </Button>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </form>
      </Grid>
    </Grid>
  );
}

export default Basic;
