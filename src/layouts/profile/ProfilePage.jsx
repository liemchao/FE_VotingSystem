import React from "react";
import { makeStyles } from "@mui/styles";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { Box, Button, ButtonGroup, CardContent, Stack } from "@mui/material";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import CardFooter from "components/Card/CardFooter";
import CardHeader from "components/Card/CardHeader";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import * as yup from "yup";
import BottomActionsCard from "./BottomActionsCard";
import BioCard from "./BioCard";
import RecipeReviewCard from "./RecipeReviewCard";
import { useState } from "react";
import EditProfile from "components/Popup/create/EditProfile";
import liem from "../../assets/images/liem.jpg";
import NewActive from "components/Popup/create/NewActive";

const schema = yup.object().shape({
  fullName: yup.string().required().trim(),
  phone: yup.string().required().trim(),
  email: yup.string().required().trim(),
});

const blogs = [
  {
    img: liem,
    title: "Chiến dịch mùa hè xanh!",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "error",
  },
  {
    img: liem,
    title: "Chiến dịch mua xuân xanh",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "warning",
  },
  {
    img: liem,
    title: "Chiến dịch điều đào",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "primary",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "fullwidth",
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

function ProfilePage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openNew, setOpenNew] = React.useState(false);

  const handleEditPropfile = () => {
    setOpen(true);
  };

  const handleNewActivity = () => {
    setOpenNew(true);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Card>
          <CardHeader color="primary">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <h4 className={classes.cardTitleWhite}>Chỉnh sửa trang cá nhân</h4>
                <p>FVS Voting System</p>
              </Box>
              <Box>
                <ButtonGroup>
                  <ButtonCustomize
                    nameButton="Thêm visibale"
                    bgColor="red"
                    hovercolor="#2BB557"
                    onClick={() => handleNewActivity()}
                  />
                  <ButtonCustomize nameButton="hhahahahah" bgColor="red" />
                  <ButtonCustomize nameButton="hhahahahah" bgColor="red" />
                </ButtonGroup>
              </Box>
            </Box>
          </CardHeader>
          <CardBody>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <BioCard
                  avatar="https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2020/6/26/1045888601851701862892902946201527489832653o-1593155817343264355681.jpg"
                  name="Phan Thị Thanh Mai"
                  sologan="Uống nhầm ánh mắt say trọn một đời"
                />
              </Grid>
              <Grid item xs={4}>
                <RecipeReviewCard
                  name="Phan Thị Thanh Mai"
                  phone="012548785"
                  email="abc@gmail.com"
                  address="FPT university"
                  handleClick={() => handleEditPropfile()}
                />
              </Grid>
              <Grid item xs={4}>
                <RecipeReviewCard />
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          </CardBody>

          <Box>
            <Box sx={{ pl: 5 }}>
              <Typography variant="h6">Chiến dịch</Typography>
              <Typography variant="text">Các chiến dịch bạn đã tham gia</Typography>
            </Box>
            <Grid container spacing={2} sx={{ borderRadius: "12px", p: 5 }}>
              {blogs.map((blog, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  lg={4}
                  sx={{
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <BottomActionsCard avatar={blog.img} title={blog.title} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Card>
      </Paper>
      <EditProfile setOpen={setOpen} open={open} />
      <NewActive setOpen={setOpenNew} open={openNew} />
    </div>
  );
}

export default ProfilePage;
