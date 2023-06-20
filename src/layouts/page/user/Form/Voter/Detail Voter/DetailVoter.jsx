import React from "react";
import {
  Card,
  Button,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Paper,
  Box,
} from "@mui/material";
import ListQuestion from "../List Question/ListQuetion";
import Scrollbar from "components/Layout/Scrollbar";
import { LogoDev } from "@mui/icons-material";

function DetailCandidate() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper>
          <Card
            sx={{
              position: "fixed",
              marginLeft: 10,
              maxWidth: 500,
              textAlign: "center",
              padding: "1rem 1rem 1rem 1rem",
              borderRadius: "18px",
            }}
          ></Card>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <Scrollbar>
            <ListQuestion />
          </Scrollbar>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default DetailCandidate;
