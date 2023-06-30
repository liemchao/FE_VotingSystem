import React, { useState } from "react";
import { Grid, Box, Button, styled, FormHelperText, Stack, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import PageHeader from "components/Layout/PageHeader";
import Iconify from "assets/theme/components/icon/Iconify";
import Controls from "components/Control/Controls";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import { CustomizedToast } from "components/toast/ToastCustom";
import TextArea from "components/Control/TextArea";
import { callAPIgetListForm } from "context/redux/action/action";
import Select from "components/Control/Select";
import DatePicker from "components/Control/DatePicker";
import API from "config/axios/API/API";
import { URL_API } from "config/axios/Url/URL";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ViewForm from "components/Popup/ViewForm";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export default function NewStage() {
  const dispatch = useDispatch();

  const [view, setView] = useState(false);
  const [formId, setformId] = useState();
  const Navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  if (token === null) {
    Navigate("/");
  }

  const [endTime, setEndTime] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  React.useEffect(() => {
    const getlistForm = async () => {
      await dispatch(callAPIgetListForm(token));
    };
    getlistForm();
  }, [dispatch, token]);

  const form = useSelector((state) => {
    return state.form;
  });

  const getOptions = () => {
    const item = [];
    for (var i = 0; i < form.length; i++) {
      item.push({ id: form[i].formId, title: form[i]?.name });
    }
    return item;
  };

  const formik = useFormik({
    //gắn schema để so sánh
    // validationSchema: schema,
    validateOnMount: true,
    validateOnBlur: true,
    //khởi tạo kho để bỏ data vào
    initialValues: {
      title: "",
      description: "",
      content: "",
      campaignId: "",
      formId: "",
    },

    onSubmit: async (values) => {
      const data = {
        title: formik.values.title,
        description: formik.values.description,
        content: formik.values.content,
        startTime: startTime,
        endTime: endTime,
        campaignId: id,
        formId: formik.values.formId,
      };

      //gọi API để đẩy data xuống
      try {
        const res = await API("POST", URL_API + "/api/v1/stages", data, token);
        CustomizedToast({
          message: `Đã tạo thành công ${formik.values.name}`,
          type: "SUCCESS",
        });
      } catch (error) {
        console.log("🚀 ~ file: NewStage.jsx:85 ~ onSubmit: ~ error:", error);

        CustomizedToast({
          message: `Toạ ko thành công`,
          type: "ERROR",
        });
      }
    },
  });
  console.log(form);
  return (
    <Box>
      <PageHeader
        width="60%"
        marginLeft="20%"
        title="Toạ chiến dịch"
        subTitle="Vui lòng điền đầy đủ thông tin "
        icon={getIcon("emojione-monotone:pot-of-food")}
      />
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
            width: "60%",
            marginLeft: "20%",
          }}
        >
          <Box
            sx={{ float: "left", width: "50%", flexGrow: 1, mt: "2rem" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <Controls.Input
                  required
                  variant="outlined"
                  name="name"
                  label="Tên"
                  value={formik.values.title || ""}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                />
                {/* nếu sai thì nó đỏ */}
                {formik.touched.title && formik.errors.title && (
                  <FormHelperText error id="standard-weight-helper-text-username-login">
                    {formik.errors.title}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Controls.Input
                  variant="outlined"
                  name="content"
                  required
                  label="content"
                  value={formik.values.content}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.content && formik.errors.content && (
                  <FormHelperText error id="standard-weight-helper-text-username-login">
                    {formik.errors.content}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  variant="outlined"
                  name="startTime"
                  width="100%"
                  inputFormat="DD-MM-YYYY"
                  label="Bắt đầu"
                  value={startTime}
                  onChange={(e) => {
                    setStartTime(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  variant="outlined"
                  name="endTime"
                  width="100%"
                  inputFormat="DD-MM-YYYY"
                  label="Kết thúc "
                  value={endTime}
                  onChange={(e) => {
                    setEndTime(e);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box width={500}>
                    <Select
                      name="formId"
                      required
                      label="Loại Biểu mẫu"
                      value={formik.values.formId}
                      onChange={(e) => {
                        console.log(e);
                        const a = form.find((c) => c.formId === e.target.value);
                        formik.setFieldValue("formId", a.formId);
                        setformId(a.formId);
                      }}
                      options={getOptions()}
                    />
                  </Box>

                  <IconButton
                    onClick={() => {
                      setView(true);
                    }}
                  >
                    <RemoveRedEyeIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextArea
                  columns={12}
                  width="85%"
                  row={6}
                  maxRows={6}
                  multiline
                  variant="outlined"
                  required
                  label="Mô tả"
                  name="description"
                  value={formik.values.description}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description && (
                  <FormHelperText error id="standard-weight-helper-text-username-login">
                    {formik.errors.description}
                  </FormHelperText>
                )}
              </Grid>

              <Box>
                <Stack width="200px" marginTop={"10%"} ml={"9rem"} mb={"2rem"}>
                  <ButtonCustomize variant="contained" type="submit" nameButton="Thêm Candidate" />
                </Stack>
              </Box>
            </Grid>
          </Box>
        </Box>
      </form>
      {/* <NewCateFood OpenPopUpCate={OpenPopUpCate} SetOpenPopUpCate={SetOpenPopUpCate} /> */}
      <ViewForm setView={setView} view={view} formId={formId} />
    </Box>
  );
}
