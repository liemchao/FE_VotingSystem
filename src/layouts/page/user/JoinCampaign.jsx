// import { filter } from "lodash";
// import { Link as RouterLink } from "react-router-dom";
import React from "react";
// import { styled } from "@mui/material/styles";
// import { useState } from "react";
// material
import {
  Card,
  Stack,
  Button,
  Container,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import Page from "components/Layout/Page";
export default function JoinCampain() {
  return (
    <Page title="Candidate">
      <Container>
        <Box sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 345, paddingLeft: "1rem" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nguyễn Thanh Liêm
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Kĩ Thuật Phần Mềm
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Chia sẻ</Button>
              <Button size="small">Tham gia</Button>
            </CardActions>
          </Card>
          {/* {campaigns.map((item) => { */}
          {/* return (
         
          ); */}
          {/* })} */}
        </Box>
      </Container>
      {/* <NewPopUp OpenPopUp={OpenPopUp} SetOpenPopUp={SetOpenPopUp} /> */}
    </Page>
  );
}
