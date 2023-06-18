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
              maxWidth: 356,
              padding: "1rem 1rem 1rem 1rem",
              borderRadius: "18px",
            }}
          >
            <CardMedia
              sx={{
                height: 200,
                display: "cover",
              }}
              image="https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp"
              title="green iguana"
            />
            <CardContent
              sx={{
                height: 120,
              }}
            >
              <Typography gutterBottom variant="h4" component="div">
                Liêm Chao
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Liêm Ngu
              </Typography>
              <Typography variant="body1" color="text.secondary">
                "Liêm Gà chó"
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{
                  position: "relative",
                  left: "-1rem",
                  bottom: "-1rem",
                  display: "inline - flex",
                  width: "9rem",
                  height: "3rem",
                  background: "var(--10)",
                  color: "var(--badge-text)",
                  backgroundColor: "#ffcc33",
                  boxShadow: "0 0 0.2rem 0.1rem var(--card-bg)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "30px",
                  marginLeft: "1rem",
                  fontSize: "1rem",
                  fontWeight: "700",
                  border: "0",
                }}
              >
                Bình chọn
              </Button>
              <Button
                sx={{
                  right: "-4rem",
                  bottom: "-1rem",
                }}
                size="small"
              >
                Chia sẻ
              </Button>
            </CardActions>
          </Card>
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
