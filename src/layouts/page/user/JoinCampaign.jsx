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
import NewPopUp from "components/Popup/NewPopUp";
import { useCallback } from "react";

export default function JoinCampain() {
  return (
    <Page title="Candidate">
      <Container>
        <Box sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 345, paddingLeft: "1rem" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/165515133/vi/vec-to/voting-hands-and-ballot-box.jpg?s=1024x1024&w=is&k=20&c=VKlxd59_HCpxXXTHjcVsUK_IMEgw4D8yGtYkE5CIUgo="
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                liem
              </Typography>
              <Typography variant="body2" color="text.secondary">
                liem
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
