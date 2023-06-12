import { filter } from "lodash";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useState } from "react";
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
// import Scrollbar from "components/Layout/Scrollbar";

export default function AccountPage() {
  //setColor button
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#FFCC32"),
    backgroundColor: "#FFCC33",
    "&:hover": {
      backgroundColor: "#ffee32",
    },
    display: "center",
  }));

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            <ColorButton
              variant="contained"
              component={RouterLink}
              to="#"
              onClick={() => {
                SetOpenPopUp(true);
              }}
            >
              Thêm Chiến Dịch
            </ColorButton>
          </Typography>
        </Stack>
        <Box sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/165515133/vi/vec-to/voting-hands-and-ballot-box.jpg?s=1024x1024&w=is&k=20&c=VKlxd59_HCpxXXTHjcVsUK_IMEgw4D8yGtYkE5CIUgo="
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chiến dịch 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ai sẽ là người chiến thắng Passcode
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Chia sẻ</Button>
              <Button size="small">Tham gia</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, marginLeft: "3%" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/165515133/vi/vec-to/voting-hands-and-ballot-box.jpg?s=1024x1024&w=is&k=20&c=VKlxd59_HCpxXXTHjcVsUK_IMEgw4D8yGtYkE5CIUgo="
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chiến dịch 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Giảng viên truyền cảm hứng Summer 2023
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Chia sẻ</Button>
              <Button size="small">Tham gia</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Page>
  );
}
