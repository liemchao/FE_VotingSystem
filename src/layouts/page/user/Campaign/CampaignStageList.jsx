// import { filter } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import {
  Card,
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Rating,
  Box,
} from "@mui/material";
import * as PathAction from "../../../../context/redux/PathAction";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCandidateByIdCampaign } from "context/redux/action/action";
import { Authen } from "context/authenToken/AuthenToken";
import { useContext } from "react";
import { handleGetCampaignById } from "context/redux/action/action";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import StageCard from "components/Cards/StageCard";

export const createAction = ({ type, payload }) => {
  return { type, payload };
};

export default function CampaignStageList() {
  //------------
  const { token } = useContext(Authen);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  //------------

  useEffect(() => {
    const callAPIgetList = async () => {
      dispatch(handleGetCampaignById(id, navigate));
    };
    callAPIgetList();
  }, [id]);

  const stateList = useSelector((state) => {
    return state.campaignStage;
  });
  console.log(stateList);

  const handleinvite = (id, token, idForm) => {
    dispatch(handleGetCandidateByIdCampaign(id, token));
    dispatch(
      createAction({
        type: PathAction.PUT_ID_FORM,
        payload: idForm,
      })
    );
    navigate(`/user/candidate/${id}`);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: 2,
      }}
    >
      {stateList.map((card, index) => (
        <Grid item xs={6} md={4} key={index}>
          <StageCard
            title={card.title}
            onClickJoin={() => {
              handleinvite(card.campaignId, token, card.formId);
            }}
          />
        
        </Grid>
      ))}
    </Grid>
  );
}
