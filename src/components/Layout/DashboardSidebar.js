import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Link, Button, Drawer, Typography, Avatar, Stack, IconButton } from "@mui/material";

import navConfig from "./NavConfig";
import { makeStyles } from "@mui/styles";
import NavSection from "./NavSection";
import useResponsive from "./useResponsive";
import Scrollbar from "./Scrollbar";
import { Authen } from "../../context/authenToken/AuthenToken";
import logo from "../../assets/images/logos/LogoFVS.svg";
import Iconify from "assets/theme/components/icon/Iconify";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 230;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
    bgcolor: "red",
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_44],
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
  onOpenSidebar: PropTypes.func,
};

export default function DashboardSidebar({
  onOpenSidebar,
  isOpenSidebar,
  onCloseSidebar,
  handleClickOpen,
  open,
}) {
  const getIcon = (name) => <Iconify icon={name} width={50} height={50} color="white" />;

  const { pathname } = useLocation();

  const { decode } = useContext(Authen);

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
          overflowX: "none",
        },
      }}
    >
      <Box sx={{ mr: -4, ml: -4, pb: -2, mt: -1, backgroundColor: "white" }}>
        <Stack alignItems="center" spacing={1} sx={{ borderRadius: 2, position: "relative" }}>
          <Avatar sx={{ width: 300, height: 150 }} src={logo} />
        </Stack>
      </Box>

      <Box sx={{ mb: 1, mx: 2.5, ml: -0.8 }}>
        <Link underline="none" component={RouterLink} to="campaign">
          <AccountStyle>
            <IconButton>{getIcon("ion:home")}</IconButton>
            <Box sx={{ ml: 1 }}>
              <Typography variant="subtitle2" sx={{ color: "white" }}>
                Trang Chủ
              </Typography>
              {/* <Typography variant="body1" sx={{ color: "text.primary" }}>
                {decode?.RoleName}
              </Typography> */}
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && open === false ? (
        <Drawer
          open
          // handleClickOpen
          display="flex"
          isOpenSidebar
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "#F7941D",
              borderRightStyle: "dashed",
              position: "absolute",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <></>
      )}
    </RootStyle>
  );
}
