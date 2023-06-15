import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import * as yup from "yup";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";

import { Typography } from "@mui/material";
import { LoginAthen } from "../../../context/redux/action/action";
import { useDispatch } from "react-redux";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
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

const schema = yup.object().shape({});
function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: schema,
    validateOnMount: true,
    validateOnBlur: true,
    initialValues: {
      userName: "",
      password: "",
    },

    onSubmit: async (values) => {
      const adminData = {
        userName: formik.values.userName,
        password: formik.values.password,
      };
      dispatch(LoginAthen(adminData, navigate));
    },
  });

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
          &quot;Chúng tôi đưa ra một hệ thống bình chọn đưa ra ứng cử viên tốt nhất trong một chiến
          dịch bình chọn.&quot;
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: "#FDF8EB", textAlign: "center" }}>
        <Typography sx={{ marginTop: "5%" }} variant="h1" color="#090914">
          Join System
        </Typography>
        <Typography sx={{ marginTop: "2%" }} variant="body2" color="#090914">
          Chào mừng bạn đến với hệ thống.
        </Typography>
        <form style={{ textAlign: "center", marginTop: "10%" }} onSubmit={formik.handleSubmit}>
          <span style={{ marginLeft: "-40%" }}>Email Address</span>
          <br />
          <TextField
            sx={{ width: "400px" }}
            name="userName"
            value={formik.values.userName}
            onChange={(e) => {
              formik.handleChange(e);
            }}
          />
          <br />
          <span style={{ marginLeft: "-45%" }}>Password</span> <br />
          <TextField
            sx={{ width: "400px" }}
            type="password"
            name="password"
            value={formik.values.password}
            onChange={(e) => {
              formik.handleChange(e);
            }}
          />
          <br />
          <Checkbox sx={{ marginLeft: "-8%" }}></Checkbox>
          Remember Me
          <a href="#" style={{ marginLeft: "10%" }}>
            Forgot Password ?
          </a>
          <br />
          <ButtonCustomize nameButton="Login" marginLeft="10rem" bgColor="#F6911B" type="submit" />
          <div style={{ marginLeft: "15rem", marginTop: "-7%" }}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        </form>
      </Grid>
    </Grid>
  );
}

export default Basic;
