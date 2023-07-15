import { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Container, Grid } from "@mui/material";
import CampaignStageList from "./CampaignStageList";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Authen } from "context/authenToken/AuthenToken";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import { getCampaignId } from "context/redux/action/action";
import moment from "moment";
import CommentForm from "layouts/page/comment";
import CommentSection from "layouts/page/comment";
//----------------------------------------------------------------
const comments = [
  {
    author: "John",
    content: "This is a great post!",
    avatar: "https://picsum.photos/200",
  },
  {
    author: "Jane",
    content: "I enjoyed reading this article.",
    avatar: "https://picsum.photos/200",
  },
  {
    author: "Bob",
    content: "Thanks for sharing!",
    avatar: "https://picsum.photos/200",
  },
];
export default function CampaignStage() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { token } = useContext(Authen);

  const { id } = useParams();
  useEffect(() => {
    const callAPI = async () => {
      await dispatch(getCampaignId(id, token));
    };
    callAPI();
  }, [id]);

  const getcampaignById = useSelector((state) => {
    return state.getcampaignById;
  });
  console.log(getCampaignId.title);

  const handleNavigate = () => {
    navigate(`/user/campaign/newStage/${id}`);
  };

  return (
    <>
      <Card sx={{ maxheight: "100px", marginTop: "-2%" }}>
        <Grid container>
          <Grid item xs={10.8}>
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                {getcampaignById.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {moment(getcampaignById.startTime).format("DD-MM-YYYY HH:mm:ss")} to{" "}
                {moment(getcampaignById.endTime).format("DD-MM-YYYY HH:mm:ss")}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={1.2} justifyContent="flex-end" mt={1} mr={0}>
            <ButtonCustomize
              nameButton=" Thêm giai đoạn"
              bgColor="#FFA500"
              hovercolor="#F7941D"
              onClick={() => {
                handleNavigate();
              }}
            />
          </Grid>
        </Grid>
      </Card>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "-2%" }}>
        <CampaignStageList />
      </Box>
      <CommentSection />
    </>
  );
}
