import { Dialog, DialogContent, DialogTitle, Grid, Paper, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import TextArea from "components/Control/TextArea";
import Select from "components/Control/Select";
import Input from "components/Control/Input";
import PageHeader from "components/Layout/PageHeader";
import Iconify from "assets/theme/components/icon/Iconify";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "context/redux/action/action";
import { Authen } from "context/authenToken/AuthenToken";
import { useContext } from "react";
import { URL_API } from "config/axios/Url/URL";
import API from "config/axios/API/API";
import { CustomizedToast } from "components/toast/ToastCustom";
import { getAllType } from "context/redux/action/action";

const schema = yup.object().shape({});


const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;


export default function FormPopup(props) {
  const { OpenPopUp, SetOpenPopUp } = props;
  const dispatch = useDispatch();
  const [display, setDisplay] = useState();
  const [typeId, setTypeId] = useState();
  const [input, setInput] = useState([]);
  const [formId, setformId] = useState();

  const handleClose = () => {
    SetOpenPopUp(false);
  };

  const { token } = useContext(Authen);
  const detoken = jwt_decode(token);

  useEffect(() => {
    const getAPIcatagory = async () => {
      await dispatch(getAllCategory(token));
      await dispatch(getAllType(token));
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
  const type = useSelector((state) => {
    return state.type;
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
  const getTypeOption = () => {
    const TypeOption = [];
    for (var i = 0; i < type.length; i++) {
      TypeOption.push({
        id: type[i].typeId,
        title: type[i].name,
      });
    }
    return TypeOption;
  };

  const formikAddQuestion = useFormik({
    validationSchema: schema,
    validateOnMount: true,
    validateOnBlur: true,
    initialValues: {
      title: "",
      content: "",
      formId: formId,
      typeId: "",
      element: [
        {
          content: "",
          rate: 0,
        },
      ],
    },
    onSubmit: async (values) => {
      const data = {
        title: "",
        content: "",
        formId: "",
        typeId: "",
        element: [
          {
            content: "",
            rate: 0,
          },
        ],
      };

      try {
        const req = await API("POST", URL_API + `/api/v1/forms`, data, token);
        if (req) {
          console.log("🚀 ~ file: FormPopUp.jsx:105 ~ onSubmit: ~ req:", req);
          setformId(req.data.data.formId);
        }
      } catch (error) {
        console.log("🚀 ~ file: FormPopUp.jsx:108 ~ onSubmit: ~ error:", error);

        CustomizedToast({
          message: "Thêm câu hỏi thất bại",
          type: "ERROR",
        });
      }
    },
  });

  const formik = useFormik({
    validationSchema: schema,
    validateOnMount: true,
    validateOnBlur: true,
    initialValues: {
      name: "",
      visibility: "",
      categoryId: "",
      userId: "",
    },
    onSubmit: async (values) => {
      const data = {
        name: formik.values.name,
        visibility: display,
        categoryId: formik.values.categoryId,
        userId: detoken.Username,
      };

      try {
        const req = await API("POST", URL_API + `/api/v1/forms`, data, token);
        if (req) {
          console.log("🚀 ~ file: FormPopUp.jsx:105 ~ onSubmit: ~ req:", req);
          setformId(req.data.data.formId);
        }
      } catch (error) {
        console.log("🚀 ~ file: FormPopUp.jsx:108 ~ onSubmit: ~ error:", error);

        CustomizedToast({
          message: "Thêm câu hỏi thất bại",
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
            title={formId ? "Tạo câu hỏi " : "Tạo mới biểu mẫu"}
            subTitle={formId ? "Thêm câu hỏi " : "Tạo biểu mẫu cho riêng bạn"}
            icon={getIcon("gala:add")}
          />
        </DialogTitle>

        <DialogContent>
          {formId ? (
            //id form có thì hiển thị add câu hỏi
            //dưới đây là form add câu hỏi tuỳ filee trên API mà bỏ zô
            <form onSubmit={formikAddQuestion.handleSubmit}>
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
                        name="title"
                        label="Tên câu hỏi"
                        value={formikAddQuestion.values.title}
                        onChange={(event) => {
                          formik.handleChange(event);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        required
                        variant="outlined"
                        name="content"
                        label="Nội dung"
                        value={formikAddQuestion.values.name}
                        onChange={(event) => {
                          formik.handleChange(event);
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
                          name="typeId"
                          required
                          label="Loại biểu mẫu"
                          width="14rem"
                          height="10rem"
                          onChange={(e) => {
                            const a = type.find((c) => c.typeId === e.target.value);
                            formikAddQuestion.setFieldValue("typeId", a.typeId);
                            console.log(a.typeId);
                            setTypeId(a.typeId);
                          }}
                          options={getTypeOption()}
                        />
                      </Box>
                    </Grid>
                    {typeId === "f83e19ad-b21d-4295-bd2b-2e6eb4a94387" && (
                      // có ID thì ren der ra tạo câu trả lời
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            flexDirection: "row",
                          }}
                        >
                          <Input
                            required
                            variant="outlined"
                            name="content"
                            label="Nội dung"
                            value={formikAddQuestion.values.content}
                            onChange={(event) => {
                              formik.handleChange(event);
                            }}
                          />
                        </Box>
                      </Grid>
                    )}

                    <Box width="200px" marginTop={"10%"} ml={"12rem"} mb={"2rem"}>
                      <ButtonCustomize
                        variant="contained"
                        type="submit"
                        nameButton="Thêm"
                        bgColor="#F6911B"
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </form>
          ) : (
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
                        name="name"
                        label="Tên Biểu Mẫu"
                        value={formik.values.name}
                        onChange={(event) => {
                          formik.handleChange(event);
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
                          label="Loại biểu mẫu"
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
                          flexDirection: "row",
                        }}
                      >
                        <Select
                          name="visibility"
                          required
                          label="Hiển thị"
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
                        bgColor="#F6911B"
                      />
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
