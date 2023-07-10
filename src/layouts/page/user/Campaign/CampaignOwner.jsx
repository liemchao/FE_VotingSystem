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
} from "@mui/material";
import Page from "components/Layout/Page";
import { useContext } from "react";
import { Authen } from "context/authenToken/AuthenToken";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCallback } from "react";
import { GetCampaignbyUserId } from "context/redux/action/action";
import jwt_decode from "jwt-decode";
import NewPopUp from "components/Popup/create/NewPopUp";
import { handleGetCampaignById } from "context/redux/action/action";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import UpdateCampaign from "components/Popup/updatePopup/UpdateCampaign";
import { getCampaignId } from "context/redux/action/action";
import AlertDialog from "components/Popup/delete/Dialog";
import AddCandidate from "components/Popup/add/AddCandidate";

export default function CampaignOwenrList() {
  const navigate = useNavigate();

  //   const handleinvite = () => {
  //     navigate("/user/allcampaign");
  //   };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    backgroundColor: "#2BB557",
    "&:hover": {
      backgroundColor: "#ffee32",
    },
    display: "center",
  }));

  const [OpenPopUp, SetOpenPopUp] = useState(false);
  const [OpenDiaLog, SetOpenDialog] = useState(false);
  const [OpenUpdate, SetOpenUpdate] = useState(false);
  const [newCandidate, setNewCandidate] = useState(false);
  const [id, setId] = useState();
  const { token } = useContext(Authen);
  const decode = jwt_decode(token);

  const dispatch = useDispatch();
  useEffect(() => {
    const callAPI = async () => {
      await dispatch(GetCampaignbyUserId(decode.Username, token));
    };
    callAPI();
  }, [dispatch, token]);

  const campainOwner = useSelector((state) => {
    return state.campainOwner;
  });

  const handleCampaignStage = async (id, navigate) => {
    await dispatch(handleGetCampaignById(id, navigate));
  };

  const handleClickOpen = useCallback(() => {
    SetOpenPopUp(true);
  }, []);

  const handleClickOpenDialog = useCallback(
    (id) => {
      setId(id);
      SetOpenDialog(true);
    },
    [id]
  );
  const handleClickUpdate = useCallback(
    (id) => {
      setId(id);
      dispatch(getCampaignId(id, token));
      SetOpenUpdate(true);
    },
    [id]
  );
  const handleClickNewUser = useCallback((id) => {
    setId(id);
    setNewCandidate(true);
  }, []);

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" mb={5}>
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
        <Box>
          {campainOwner.map((item) => {
            return (
              <Card sx={{ maxWidth: 1300, maxHeight: 400, paddingLeft: "1rem", marginTop: "2%" }}>
                <CardMedia sx={{ height: 70 }} image={item.imgUrl} title="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.userName}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <ButtonCustomize nameButton="Chia sẻ" bgColor="#71C043" hovercolor="#2BB557" />
                  <ButtonCustomize
                    nameButton="Cài đặt"
                    bgColor="#71C043"
                    hovercolor="#2BB557"
                    onClick={() => {
                      handleCampaignStage(item.campaignId, navigate);
                    }}
                  />
                  <ButtonCustomize
                    nameButton="Kết quả"
                    bgColor="#71C043"
                    hovercolor="#2BB557"
                    onClick={() => {
                      // handleCampaignStage(item.campaignId, navigate);
                    }}
                  />

                  <ButtonCustomize
                    nameButton="Chỉnh sửa"
                    bgColor="#71C043"
                    hovercolor="#2BB557"
                    onClick={() => {
                      handleClickUpdate(item.campaignId);
                    }}
                  />
                  {/* <Button
                    onClick={() => {
                      handleCampaignStage(item.campaignId, navigate);
                    }}
                    type="button"
                    size="small"
                  >
                    <ColorButton>Cài đặt</ColorButton>
                  </Button> */}
                  <ButtonCustomize
                    nameButton="Xóa"
                    bgColor="#71C043"
                    hovercolor="#2BB557"
                    onClick={() => {
                      handleClickOpenDialog(item.campaignId);
                    }}
                  />

                  <ButtonCustomize
                    nameButton="Thêm ứng cử viên"
                    bgColor="#71C043"
                    hovercolor="#2BB557"
                    onClick={() => {
                      handleClickNewUser(item.campaignId);
                    }}
                  />
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
      <AddCandidate OpenPopUp={newCandidate} SetOpenPopUp={setNewCandidate} id={id} />
      <UpdateCampaign OpenEditCampaign={OpenUpdate} SetOpenEditCampaign={SetOpenUpdate} id={id} />
      <AlertDialog OpenDialog={OpenDiaLog} SetOpenDialog={SetOpenDialog} id={id} />
      <NewPopUp OpenPopUp={OpenPopUp} SetOpenPopUp={SetOpenPopUp} />
    </Page>
  );
}
