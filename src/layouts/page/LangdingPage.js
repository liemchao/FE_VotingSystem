import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import letterimge from "../../assets/images/thungthu.PNG";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          height: "80%",
          margin: "1%",
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            ></Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
              </Search>
              <IconButton size="large" color="inherit">
                <Badge color="error">
                  <CalendarTodayIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <CalendarTodayIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box
        sx={{
          height: "5%",
          backgroundColor: "#FFFFFF",
          width: "99%",
        }}
      >
        <Badge
          sx={{
            height: "1%",
          }}
        ></Badge>
      </Box>
      <Box>
        <h3 style={{ textAlign: "center", fontStyle: "normal" }}> Why choose Us ?</h3>
        <h1 style={{ textAlign: "center", maxWidth: "300" }}>
          We Let Your Sweet Memory Evenr Unforgottable
        </h1>
        <Container sx={{ display: "flex" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="https://static.thenounproject.com/png/4038155-200.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Expert agent
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, marginLeft: "3%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="https://cdn.icon-icons.com/icons2/2066/PNG/512/check_mark_circle_icon_125343.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Easy Options
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, marginLeft: "3%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="https://cdn-icons-png.flaticon.com/512/684/684833.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  World Class Service
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, marginLeft: "3%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="https://img.uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/shield-checkmark-line-icon.svg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Total Secured
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
        <Box
          sx={{
            height: "5%",
            backgroundColor: "#FFFFFF",
            width: "99%",
            marginTop: "2%",
          }}
        >
          <Badge
            sx={{
              height: "1%",
            }}
          ></Badge>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card
                sx={{
                  maxWidth: 200,
                  marginTop: "2%",
                  backgroundColor: "#5BD1D5",
                  marginLeft: "20%",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="div" color="#EFFAFB">
                      8000+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Biểu Mẫu
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                sx={{
                  maxWidth: 200,
                  marginTop: "2%",
                  backgroundColor: "#FDF8EB",
                  marginLeft: "35%",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="div" color="#E8B63A">
                      10500+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Người dùng
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                sx={{
                  maxWidth: 200,
                  marginTop: "2%",
                  backgroundColor: "#FFEEE9",
                  marginLeft: "22%",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="div" color="#FF5522">
                      500+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Chiến dịch
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ marginTop: "2%" }} variant="body1" component="div">
                Tại sao nên dùng hệ thống VFS
              </Typography>
              <Typography gutterBottom variant="h5" color="text.secondary">
                Chúng tôi mang đến sự thoải mái phù hợp nhu cầu cho bạn
              </Typography>
              <Typography
                sx={{ marginTop: "2%", maxWidth: 500 }}
                variant="body2"
                color="text.secondary"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
                accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper
                amet adipiscing fermentum.
              </Typography>
              <Typography
                sx={{ marginTop: "2%", maxWidth: 500 }}
                variant="body2"
                color="text.secondary"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
                accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper
                amet adipiscing fermentum.
              </Typography>
              <Typography
                sx={{ marginTop: "2%", maxWidth: 500 }}
                variant="body2"
                color="text.secondary"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
                accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper
                amet adipiscing fermentum.
              </Typography>
            </Grid>
          </Grid>

          {/* <Box sx={{ marginTop: "2%" }}>
              <Card
                sx={{
                  maxWidth: 345,
                  marginTop: "2%",
                  backgroundColor: "#5BD1D5",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="div" color="#EFFAFB">
                      8000+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Biểu Mẫu
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 345, marginTop: "2%", backgroundColor: "#FDF8EB" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="div" color="#E8B63A">
                      10500+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Người dùng
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 345, margin: "2%", backgroundColor: "#FFEEE9" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="div" color="#FF5522">
                      500+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Chiến dịch
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box> */}
          {/* <Box></Box>
          </Grid> */}
        </Box>
        <Box
          sx={{
            height: "5%",
            backgroundColor: "#FFFFFF",
            width: "99%",
            marginTop: "2%",
          }}
        >
          <Badge
            sx={{
              height: "1%",
            }}
          ></Badge>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h5"
              color="text.secondary"
              sx={{ marginTop: "2%" }}
              textAlign={"center"}
            >
              Chúng tôi mang đến sự thoải mái phù hợp nhu cầu cho bạn
            </Typography>
            <Typography
              textAlign={"center"}
              sx={{ marginTop: "2%", maxWidth: 400, marginLeft: "38%" }}
              variant="body2"
              color="text.secondary"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
              accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet
              adipiscing fermentum.
            </Typography>
          </Grid>
          <Container sx={{ display: "flex" }}>
            <Card
              sx={{
                marginTop: "3%",
                backgroundColor: "#E2E8F0",
                width: 170,
                height: 110,
                border: "4px solid white",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <Avatar
                src="https://example.com/image.jpg"
                style={{ width: 100, height: 100, fontSize: 40, marginLeft: "10%" }}
              />
            </Card>
            <Card
              sx={{
                marginTop: "3%",
                backgroundColor: "#E2E8F0",
                width: 170,
                height: 110,
                border: "4px solid white",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <Avatar
                src="https://example.com/image.jpg"
                style={{ width: 100, height: 100, fontSize: 40, marginLeft: "10%" }}
              />
            </Card>
            <Card
              sx={{
                marginTop: "3%",
                backgroundColor: "#E2E8F0",
                width: 170,
                height: 110,
                border: "4px solid white",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <Avatar
                src="https://example.com/image.jpg"
                style={{ width: 100, height: 100, fontSize: 40, marginLeft: "10%" }}
              />
            </Card>
            <Card
              sx={{
                marginTop: "3%",
                backgroundColor: "#E2E8F0",
                width: 170,
                height: 110,
                border: "4px solid white",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <Avatar
                src="https://example.com/image.jpg"
                style={{ width: 100, height: 100, fontSize: 40, marginLeft: "10%" }}
              />
            </Card>
            <Card
              sx={{
                marginTop: "1%",
                backgroundColor: "#E2E8F0",
                width: 210,
                height: 220,
                border: "4px solid white",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <Avatar
                src="https://example.com/image.jpg"
                style={{
                  width: 150,
                  height: 200,
                  fontSize: 40,
                  backgroundColor: "#FDBA74",
                  textAlign: "center",
                  marginLeft: "5%",
                }}
              />
            </Card>
            <Card
              sx={{
                marginTop: "3%",
                backgroundColor: "#E2E8F0",
                width: 170,
                height: 110,
                border: "4px solid white",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <Avatar
                src="https://example.com/image.jpg"
                style={{ width: 100, height: 100, fontSize: 40, marginLeft: "10%" }}
              />
            </Card>
            <Card
              sx={{
                marginTop: "3%",
                backgroundColor: "#E2E8F0",
                width: 170,
                height: 110,
                border: "4px solid white",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <Avatar
                src="https://example.com/image.jpg"
                style={{ width: 100, height: 100, fontSize: 40, marginLeft: "10%" }}
              />
            </Card>
            <Card
              sx={{
                marginTop: "3%",
                backgroundColor: "#E2E8F0",
                width: 170,
                height: 110,
                border: "4px solid white",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <Avatar
                src="https://example.com/image.jpg"
                style={{ width: 100, height: 100, fontSize: 40, marginLeft: "10%" }}
              />
            </Card>
            <Card
              sx={{
                marginTop: "3%",
                backgroundColor: "#E2E8F0",
                width: 170,
                height: 110,
                border: "4px solid white",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            >
              <Avatar
                src="https://example.com/image.jpg"
                style={{ width: 100, height: 100, fontSize: 40, marginLeft: "10%" }}
              />
            </Card>
          </Container>
          <Grid
            container
            spacing={2}
            sx={{ background: "#DEF6F7", margin: "2%", borderRadius: "20px" }}
          >
            <Grid item xs={6}>
              <Typography
                gutterBottom
                variant="h2"
                color="text.secondary"
                sx={{ marginTop: "1%", marginLeft: "3%" }}
              >
                Chúng tôi có thể giúp gì cho bạn?
              </Typography>
              <Typography
                sx={{ marginTop: "2%", maxWidth: 400, marginLeft: "3%" }}
                variant="body2"
                color="text.secondary"
              >
                Gửi email để có thể nhận được sử hỗ trợ của chúng tôi.
              </Typography>
              <Container sx={{ display: "flex" }}>
                <TextField
                  sx={{
                    width: "40ch",
                    marginRight: "3%",
                  }}
                  id="outlined-basic"
                  label="Email"
                  placeholder="Your emaill address"
                  variant="outlined"
                />
                <Button sx={{ marginLeft: "2%", backgroundColor: "#E8B63A" }} variant="contained">
                  Send
                </Button>
              </Container>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ backgroundColor: "#DEF6F7" }}>
                <CardMedia
                  component="img"
                  alt="My Image"
                  height="100"
                  with="150"
                  image={letterimge}
                  title="My Image"
                />{" "}
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Box></Box>
        <Box sx={{ marginLeft: "3%", display: "flex" }}></Box>
      </Box>
    </>
  );
}
