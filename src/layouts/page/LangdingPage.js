import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import letterimge from "../../assets/images/thungthu.PNG";
import PlaceIcon from "@mui/icons-material/Place";
import { Phone } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import HeaderAu from "../header/headerAuthor";
import HeaderUnthor from "layouts/header/headerUnthor";
export default function PrimarySearchAppBar() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* <HeaderAu></HeaderAu> */}
      <HeaderUnthor></HeaderUnthor>
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
        <Box sx={{ marginLeft: "3%", display: "flex" }}>
          <Box>
            <Typography variant="h3">Logo</Typography>
            <div>
              <PlaceIcon />
              <span style={{ marginLeft: "2%", maxHeight: 400 }}>21/12/Lê Văn Việt</span>
            </div>
            <div>
              <Phone colors="blue" />
              <span style={{ marginLeft: "2%" }}>0733898497</span>
            </div>
            <div>
              <EmailIcon />
              <span style={{ marginLeft: "2px" }}>liemro9x@gmail.com</span>
            </div>
            <div>
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </div>
          </Box>
          <Box sx={{ marginLeft: "40%", marginRight: "20%" }}>
            <Typography variant="h3">Top Destion</Typography>
            <div>
              <span style={{ marginLeft: 10 }}>FPT Hồ Chí Minh</span>
            </div>
            <div>
              <span style={{ marginLeft: 10 }}>FPT Đà Nẵng</span>
            </div>
            <div>
              <span style={{ marginLeft: 10 }}>FPT Cần Thơ</span>
            </div>
            <div>
              <span style={{ marginLeft: 10 }}>FPT Hà Nội</span>
            </div>
          </Box>
          <Box>
            <Typography variant="h3">Useful Links</Typography>
            <div>
              <span style={{ marginLeft: 10 }}>About Us</span>
            </div>
            <div>
              <span style={{ marginLeft: 10 }}>Company Profile</span>
            </div>
            <div>
              <span style={{ marginLeft: 10 }}>Team Members</span>
            </div>
            <div>
              <span style={{ marginLeft: 10 }}>Support</span>
            </div>
            <div>
              <span style={{ marginLeft: 10 }}>Career</span>
            </div>
          </Box>
        </Box>
        <Box bgcolor="grey.200" py={2}>
          <Typography variant="body2" align="center" color="textSecondary">
            &copy; {currentYear} My Company. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
