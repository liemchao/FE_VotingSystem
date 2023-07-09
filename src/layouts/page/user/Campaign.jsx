import { Link as RouterLink, useLocation, useNavigate, useParams } from "react-router-dom";
import React from "react";
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
  LinearProgress,
  Icon,
  Grid,
} from "@mui/material";
import QRPopUp from "components/Popup/create/QRPopUp";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Page from "components/Layout/Page";
import { useContext } from "react";
import { Authen } from "context/authenToken/AuthenToken";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAPIgetListCampaigns, handleGetCampaignById } from "context/redux/action/action";

import { useCallback } from "react";
import BadgeAvatars from "./icontop/icontop";
import Iconify from "assets/theme/components/icon/Iconify";
import NewPopUp from "components/Popup/create/NewPopUp";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import UserCard from "components/Cards/cardCampaign";
import moment from "moment";
import dayjs from "dayjs";

export const createAction = ({ type, payload }) => {
  return { type, payload };
};

export default function CampaignList() {
  const param = useParams();
  const navigate = useNavigate();
  const [Link, setLink] = useState(window.location.href);
  const [open, setopen] = useState(false);

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

  const handleGetQR = useCallback((id) => {
    setopen(true);
    setLink(window.location.href + "/" + id);
  }, []);

  const handleClickOpen = useCallback(() => {
    SetOpenPopUp(true);
  }, []);

  const handleCampaignStage = useCallback(
    async (id, navigate) => {
      await dispatch(handleGetCampaignById(id, navigate));
    },
    [dispatch]
  );

  return (
    <Page title="Campaign">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" mb={3}>
          <Typography variant="h4" gutterBottom>
            <ButtonCustomize
              nameButton="Thêm Chiến Dịch"
              bgColor="#71C043"
              hovercolor="#2BB557"
              onClick={() => {
                handleClickOpen();
              }}
            />
          </Typography>
        </Stack>

        {campaigns.map((item) => {
          return (
            <Box sx={{ gap: 2 }}>
              <UserCard
                id={item.campaignId}
                title={item.title}
                creater={"Moderator"}
                url={item.imgUrl}
                dayEnd={dayjs(item.endTime).format("DD-MM-YYYY HH:mm:ss")}
                onClickShare={() => {
                  handleGetQR(item.campaignId);
                }}
                onClickJoin={() => {
                  handleCampaignStage(item.campaignId, navigate);
                }}
              />
            </Box>
          );
        })}
      </Container>
      <QRPopUp OpenPopUp={open} SetOpenPopUp={setopen} link={Link} />;
      <NewPopUp OpenPopUp={OpenPopUp} SetOpenPopUp={SetOpenPopUp} />
    </Page>
  );
}
