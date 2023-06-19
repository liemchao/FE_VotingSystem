import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import * as yup from "yup";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";

import { Box, Button, Typography } from "@mui/material";
import { LoginAthen, loginFirebase } from "../../../context/redux/action/action";
import { useDispatch } from "react-redux";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import firebase, { auth } from "../../../config/Firebase/firebase.js";
import GoogleButton from "components/Control/GoogleButton";

const ggProvider = new firebase.auth.GoogleAuthProvider();

const schema = yup.object().shape({});
function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idFireBase, setIdFireBase] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const hanldeLoginWithgg = async () => {
    const hihi = await auth.signInWithPopup(ggProvider);
    auth.onAuthStateChanged((user) => {
      dispatch(loginFirebase(user._delegate.accessToken));
    });
  };

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
      setIsLoggedIn(true);
      dispatch(LoginAthen(adminData, navigate));
    },
  });

  return (
    <Box height="100vh" display="flex">
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ backgroundColor: "#F6911B", textAlign: "center" }}>
          <Typography sx={{ marginTop: "5%" }} variant="h1" color="#FFFFFF">
            Welcome to our system
          </Typography>
          <Typography sx={{ marginTop: "5%" }} variant="body2" color="#CBD5E1  ">
            Hệ thống cung cấp hỗ trợ tạo chiến dịch dánh giá phù hợp với nhiều mục tiêu.
          </Typography>
          <Typography sx={{ marginTop: "77%" }} variant="body2" color="#FFFFFF">
            &quot;Chúng tôi đưa ra một hệ thống bình chọn đưa ra ứng cử viên tốt nhất trong một
            chiến dịch bình chọn.&quot;
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
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={8}>
                  <TextField
                    sx={{ width: "400px" }}
                    name="userName"
                    label="User Name"
                    value={formik.values.userName}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    sx={{ width: "400px" }}
                    type="password"
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Checkbox sx={{ marginLeft: "-1%" }}></Checkbox>
                  Remember Me
                  <a href="#" style={{ paddingLeft: "27%" }}>
                    Forgot Password ?
                  </a>
                </Grid>
                <Grid item xs={8}>
                  <Grid container>
                    <Grid item xs={6}>
                      <ButtonCustomize
                        marginRight="12rem"
                        marginLeft="2.7rem"
                        nameButton="Login"
                        bgColor="#F6911B"
                        width="7rem"
                        height="2.5rem"
                        type="submit"
                        color="#FFFFFF"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <GoogleButton onClick={hanldeLoginWithgg} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Basic;
