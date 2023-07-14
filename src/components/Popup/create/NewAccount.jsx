import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Button,
  Box,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import Select from "components/Control/Select";
import Input from "components/Control/Input";
import PageHeader from "components/Layout/PageHeader";
import Iconify from "assets/theme/components/icon/Iconify";
import DateTime from "components/Control/DateTime";
import { Authen } from "context/authenToken/AuthenToken";
import { useContext } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "context/redux/action/action";
import { CustomizedToast } from "components/toast/ToastCustom";
import { URL_API } from "config/axios/Url/URL";
import API from "config/axios/API/API";
import moment from "moment";
import { GetCampaignbyUserId } from "context/redux/action/action";

const schema = yup.object().shape({});

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export default function NewAccount(props) {
  const dispatch = useDispatch();
  const { token } = useContext(Authen);
  const { OpenPopUp, SetOpenPopUp, id } = props;

  const formData = new FormData();
  const handleClose = () => {
    SetOpenPopUp(false);
  };
  const decode = jwt_decode(token);

  const formik = useFormik({
    validationSchema: schema,
    validateOnMount: true,
    validateOnBlur: true,
    initialValues: {
      userName: "",
      password: "",
      fullName: "",
      address: "",
      groupId: "",
      campaignId: "",
    },
    onSubmit: async (values) => {
      const data = {
        userName: formik.values.userName,
        password: formik.values.password,
        fullName: formik.values.fullName,
        address: formik.values.address,
        groupId: "ec73bf35-d867-4fb4-b73e-0d82bf63d005",
        campaignId: id,
      };
      try {
        const req = await API("POST", URL_API + `/api/v1/candidates/account`, data, token);
        console.log(req);
        if (req) {
          // dispatch(GetCampaignbyUserId(decode.Username, token));

          CustomizedToast({
            message: "Thêm tài khoản thành công thành công",
            type: "SUCCESS",
          });
        }
      } catch (error) {
        console.log(error);
        CustomizedToast({
          message: "Thêm tài khoản không thành công",
          type: "ERROR",
        });
      }
    },
  });
  return (
    <Paper>
      <Dialog maxWidth="md" open={OpenPopUp} onClose={handleClose}>
        <DialogTitle>
          <PageHeader
            title="Thêm ứng cử viên"
            subTitle="vui lòng điền đầy đủ thông tin"
            icon={getIcon("gala:add")}
          />
        </DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                borderRadius: 2,
                bgcolor: "background.paper",
                m: 1,
                display: "flex",
                justifyContent: "center",
                boxShadow: 12,
                paddingLeft: "7%",
                maxWidth: "xl",
                // marginLeft: "20%",
              }}
            >
              <Box
                sx={{ float: "left", width: "60%", flexGrow: 1, mt: "2rem" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    <Input
                      required
                      variant="outlined"
                      name="userName"
                      label="Tên tài khoản"
                      value={formik.values.userName}
                      onChange={(event) => {
                        formik.handleChange(event);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      required
                      variant="outlined"
                      name="fullName"
                      label="Họ và tên "
                      value={formik.values.fullName}
                      onChange={(event) => {
                        formik.handleChange(event);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ width: "41.5rem" }}
                      type="password"
                      name="password"
                      label="Password"
                      value={formik.values.password}
                      onChange={(e) => {
                        formik.handleChange(e);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      required
                      variant="outlined"
                      name="address"
                      label="Địa chỉ"
                      value={formik.values.address}
                      onChange={(event) => {
                        formik.handleChange(event);
                      }}
                    />
                  </Grid>

                  <Box width="200px" marginTop={"10%"} ml={"12rem"} mb={"2rem"}>
                    <ButtonCustomize
                      variant="contained"
                      type="submit"
                      nameButton="Thêm"
                      bgColor="#71C043"
                      hovercolor="#2BB557"
                    />
                  </Box>
                </Grid>
              </Box>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
