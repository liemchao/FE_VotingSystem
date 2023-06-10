import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import { useNavigate } from "react-router-dom";

//----------------------------------------------------------------

export default function HeaderUnthor() {
  const navigate = useNavigate();
  const hanldeNavigate = () => {
    navigate("/authentication/sign-in");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: "1rem",
        marginTop: "1rem",
        marginLeft: "2%",
        marginRight: "2%",
      }}
    >
      <AppBar position="static" sx={{ bgcolor: "white", borderRadius: "2rem" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, gap: 4 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
              Home
            </Typography>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, gap: 4 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
              Features
            </Typography>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, gap: 4 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
              Supports
            </Typography>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "center",
              alignContent: "center",
              alignItems: "center",
              marginLeft: "30%",
              color: "black",
            }}
          >
            Supports
          </Typography>
          <ButtonCustomize
            nameButton="Login"
            border="10px"
            borderRadius={"25px"}
            bgColor="#F6911B"
            width="100px"
            height="2.2rem"
            boxShadow="2"
            color="white"
            to="/authentication/sign-in"
            onClick={() => hanldeNavigate()}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
