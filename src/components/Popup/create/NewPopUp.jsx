import { Dialog, DialogContent, DialogTitle, Grid, Paper, Button, Box } from "@mui/material";
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

export default function NewPopUp(props) {
  const dispatch = useDispatch();
  const { token } = useContext(Authen);
  const { OpenPopUp, SetOpenPopUp } = props;
  const [input, setInput] = useState([]);
  const [display, setDisplay] = useState();
  const [dateCreate, setDateCreate] = useState();
  const [dateEnd, setDateEnd] = useState();
  const formData = new FormData();
  const handleClose = () => {
    SetOpenPopUp(false);
  };
  const decode = jwt_decode(token);

  function _treat(e) {
    const { files } = e.target;
    let images = [];
    const selecteds = [...[...files]];
    formik.setFieldValue("ImageFile", e.target.files[0]);
    return (
      selecteds.forEach((i) => images.push(URL.createObjectURL(i))),
      formData.append("File", selecteds),
      setInput(images)
    );
  }

  useEffect(() => {
    const getAPIcatagory = async () => {
      await dispatch(getAllCategory(token));
    };
    getAPIcatagory();
  }, []);

  const getOptions = () => [
    { id: "public", title: "Hiển thị" },
    { id: "private", title: "Không hiển thị" },
  ];

  const category = useSelector((state) => {
    return state.category;
  });

  const getCategoryOption = () => {
    const CategoryOption = [];
    for (var i = 0; i < category.length; i++) {
      CategoryOption.push({
        id: category[i].categoryId,
        title: category[i].name,
      });
    }
    return CategoryOption;
  };
  const formik = useFormik({
    validationSchema: schema,
    validateOnMount: true,
    validateOnBlur: true,
    initialValues: {
      title: "",
      visibility: "",
      startTime: "",
      userId: "",
      categoryId: "",
      endTime: "",
      ImageFile: "",
    },
    onSubmit: async (values) => {
      formData.append("title", formik.values.title);
      formData.append("startTime", moment(dateCreate).format("YYYY/MM/DD hh:mm:ss"));
      formData.append("endTime", moment(dateEnd).format("YYYY/MM/DD hh:mm:ss"));
      formData.append("visibility", display);
      formData.append("categoryId", formik.values.categoryId);
      formData.append("userId", decode.Username);
      formData.append("ImageFile", formik.values.ImageFile);
      try {
        const req = await API("POST", URL_API + `/api/v1/campaigns`, formData, token);
        console.log(req);
        if (req) {
          dispatch(GetCampaignbyUserId(decode.Username, token));

          CustomizedToast({
            message: "Thêm chiến dịch thành công",
            type: "SUCCESS",
          });
        }
      } catch (error) {
        CustomizedToast({
          message: "Thêm chiến dịch thất bại",
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
            title="Tạo mới chiến dịch"
            subTitle="Tạo chiến dịch cho riêng bạn"
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
              {/* // à nhớ bỏ cái form ở đây thì nó mới hiểu và làm onsubmit đc */}

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
                      name="title"
                      label="Tên Chiến Dịch"
                      value={formik.values.title}
                      onChange={(event) => {
                        formik.handleChange(event);
                      }}
                    />
                    {/* nếu sai thì nó đỏ */}
                    {/* {formik.touched.name && formik.errors.name && (
                      <FormHelperText error id="standard-weight-helper-text-username-login">
                        {formik.errors.name}
                      </FormHelperText>
                    )} */}
                  </Grid>
                  <Grid item xs={10}>
                    <DateTime
                      required
                      variant="outlined"
                      name="startTime"
                      label="Thời gian bắt đầu"
                      onChange={(event) => {
                        setDateCreate(event.$d);
                      }}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <DateTime
                      required
                      variant="outlined"
                      name="endTime"
                      label="Thời gian kết thúc"
                      // value={formik.values.endTime}
                      onChange={(event) => {
                        setDateEnd(event.$d);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        flexDirection: "row",
                      }}
                    >
                      <Select
                        name="categoryId"
                        required
                        label="Loại chiến dịch"
                        width="14rem"
                        height="10rem"
                        onChange={(e) => {
                          const a = category.find((c) => c.categoryId === e.target.value);
                          formik.setFieldValue("categoryId", a.categoryId);
                        }}
                        options={getCategoryOption()}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        // display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Select
                        name="visibility"
                        required
                        label="Trạng thái"
                        width="14rem"
                        height="10rem"
                        onChange={(e) => {
                          setDisplay(e.target.value);
                        }}
                        options={getOptions()}
                      />
                    </Box>
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

              <Box sx={{ float: "left", width: "30%", mt: "2rem" }}>
                <label htmlFor="contained-button-file">
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={_treat}
                    style={{ display: "none" }}
                  />
                  <ButtonCustomize bgColor="#71C043" hovercolor="#2BB557" nameButton="Tải lên..." />

                  <Box
                    sx={{
                      height: 165,
                      width: 165,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                      marginTop: "10%",
                      marginLeft: "11%",
                    }}
                  >
                    {/* hiển thị hình lên  */}
                    {input.map((i) => (
                      <img key={i} src={i} alt="hihi" />
                    ))}
                  </Box>
                </label>
              </Box>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
