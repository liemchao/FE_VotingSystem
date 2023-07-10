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
import { useDispatch, useSelector } from "react-redux";
import { handleGetCandidateByIdCampaign } from "context/redux/action/action";
import { Authen } from "context/authenToken/AuthenToken";
import { useContext } from "react";
import { handleGetCampaignById } from "context/redux/action/action";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import StageCard from "components/Cards/StageCard";

export default function CampaignStageList() {
  //------------
  const { token } = useContext(Authen);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  //------------
  const stateList = useSelector((state) => {
    return state.campaignStage;
  });

  useEffect(() => {
    const callAPIgetList = async () => {
      dispatch(handleGetCampaignById(id, navigate));
    };
    callAPIgetList();
  }, [id]);

  const handleinvite = (id, token) => {
    dispatch(handleGetCandidateByIdCampaign(id, token));
    navigate("/user/detailcandidate");
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
              handleinvite(card.campaignId, token);
            }}
          />
          {/* <Card
            sx={{
              maxWidth: 500,
              padding: "1rem 1rem 1rem 1rem",
              borderRadius: "18px",
            }}
          >
            <CardMedia
              sx={{
                height: 200,
                display: "cover",
              }}
              image="https://ben.com.vn/tin-tuc/wp-content/uploads/2021/10/hinh-nen-dep-dien-thoai.jpg"
              title="green iguana"
            />
            <CardContent
              sx={{
                height: 120,
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {card.subtitle}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                "Hãy giúp chúng tôi bình chọn 1 người xứng đáng cho vị trí lớp trưởng"
              </Typography>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </CardContent>
            <CardActions>
              <Box sx={{ marginTop: 2, gap: 17, display: "flex" }}>
                <ButtonCustomize
                  nameButton="Tham gia"
                  bgColor="#71C043"
                  hovercolor="#2BB557"
                  onClick={() => {
                    handleinvite(card.campaignId, token);
                  }}
                />
        
                <ButtonCustomize
                  nameButton="Chi tiết"
                  bgColor="#71C043"
                  hovercolor="#2BB557"
                  onClick={() => {
                    handleinvite(card.campaignId, token);
                  }}
                />
              </Box>
            </CardActions>
          </Card> */}
        </Grid>
      ))}
    </Grid>
  );
}
