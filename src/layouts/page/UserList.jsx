import { filter } from "lodash";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
// material
import { Card, Stack, Button, Container, Typography } from "@mui/material";
import Page from "components/Layout/Page";
import Scrollbar from "components/Layout/Scrollbar";

export default function UserList() {
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
              Thêm người dùng
            </ColorButton>
          </Typography>
        </Stack>

        <Card>
          <Scrollbar>hihi</Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
