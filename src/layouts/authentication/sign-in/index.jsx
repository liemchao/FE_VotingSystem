import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
import AdSlider from "components/Control/SilderLogin";
import { useState } from "react";

const ggProvider = new firebase.auth.GoogleAuthProvider();
const schema = yup.object().shape({});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Voting system
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idFireBase, setIdFireBase] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const hanldeLoginWithgg = async () => {
    const hihi = await auth.signInWithPopup(ggProvider);
    auth.onAuthStateChanged((user) => {
      dispatch(loginFirebase(user._delegate.accessToken, navigate));
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
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 2, bgcolor: "orange" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h2">
              Đăng nhập
            </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="Địa chỉ email"
                name="userName"
                autoComplete="email"
                autoFocus
                value={formik.values.userName}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
              />
              <Grid container>
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item mt={1}>
                  <Link href="#" variant="body1">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="warning"
              >
                Sign In
              </Button>
              <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
                <GoogleButton onClick={hanldeLoginWithgg} />
              </Grid>
              <Copyright sx={{ mt: 10 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
