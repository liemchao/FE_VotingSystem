import { Link as RouterLink, useNavigate } from "react-router-dom";
import React from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Iconify from "assets/theme/components/icon/Iconify";
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
  LinearProgress,
} from "@mui/material";
import Page from "components/Layout/Page";
import { useContext } from "react";
import { Authen } from "../../context/authenToken/AuthenToken";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAPIgetListCampaigns } from "../../context/redux/action/action";
import { useCallback } from "react";
import BadgeAvatars from "./user/icontop/icontop";
import NewPopUp from "components/Popup/create/NewPopUp";

export default function AllCampaignList() {
  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
  const navigate = useNavigate();
  const handleinvite = () => {
    navigate("/user/allcampaign");
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#2BB557",
    "&:hover": {
      backgroundColor: "#71C043",
    },
    display: "center",
  }));

  const [OpenPopUp, SetOpenPopUp] = useState(false);

  const { token } = useContext(Authen);
  const dispatch = useDispatch();
  useEffect(() => {
    const callAPI = async () => {
      await dispatch(callAPIgetListCampaigns(token));
    };
    callAPI();
  }, [dispatch, token]);

  const campaigns = useSelector((state) => {
    return state.campaigns;
  });

  const handleClickOpen = useCallback(() => {
    SetOpenPopUp(true);
  }, []);

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" mb={5}>
          <Typography variant="h4" gutterBottom>
            <ColorButton
              variant="contained"
              // component={RouterLink}
              // to="#"
              onClick={() => {
                handleClickOpen();
              }}
            >
              Thêm Chiến Dịch
            </ColorButton>
          </Typography>
        </Stack>
        <Box>
          {campaigns.map((item) => {
            return (
              <Card sx={{ maxWidth: 1000, maxHeight: 400, paddingLeft: "1rem", marginTop: "2%" }}>
                <CardMedia
                  sx={{ height: 70 }}
                  image="https://media.istockphoto.com/id/165515133/vi/vec-to/voting-hands-and-ballot-box.jpg?s=1024x1024&w=is&k=20&c=VKlxd59_HCpxXXTHjcVsUK_IMEgw4D8yGtYkE5CIUgo="
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.userName}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={20}
                    sx={{ borderRadius: 10, bgcolor: "primary.main", height: 10 }}
                  />
                  <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                    50%
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <BadgeAvatars
                      BadgeAvatars={getIcon("icon-park-outline:gold-medal")}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oYLzVhre_UBu4mPsjYf9EUh9mhvwXApssaTHmLjyfw&s"
                    />
                    <BadgeAvatars
                      BadgeAvatars={getIcon("icon-park-outline:gold-medal")}
                      src="https://cdn.pixabay.com/photo/2016/06/05/01/41/african-american-1436661_960_720.jpg"
                    />

                    <BadgeAvatars
                      BadgeAvatars={getIcon("icon-park-outline:gold-medal")}
                      src="https://congluan-cdn.congluan.vn/files/content/2022/03/02/1-09505723.jpg"
                    />
                  </Box>
                </CardContent>
                <CardActions sx={{ marginLeft: "80%" }}>
                  <Button sx={{ marginLeft: "-4%" }} size="small">
                    <ColorButton>Chia sẻ</ColorButton>
                  </Button>
                  <Button type="button" size="small" onClick={handleinvite}>
                    <ColorButton>Tham gia</ColorButton>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
      <NewPopUp OpenPopUp={OpenPopUp} SetOpenPopUp={SetOpenPopUp} />
    </Page>
  );
}
