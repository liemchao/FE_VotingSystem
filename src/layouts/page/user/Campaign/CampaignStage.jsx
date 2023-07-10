import { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Container, Grid } from "@mui/material";
import CampaignStageList from "./CampaignStageList";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { orange } from "@mui/material/colors";

import { Authen } from "context/authenToken/AuthenToken";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import { getCampaignId } from "context/redux/action/action";
import moment from "moment";
//----------------------------------------------------------------
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
              bgColor="#71C043"
              hovercolor="#2BB557"
              onClick={() => {
                handleNavigate();
              }}
            />
          </Grid>
        </Grid>
      </Card>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "-2%" }}>
        {/* <TextField variant="outlined" label="Search by name" sx={{ mr: 1, mt: 1 }} /> */}
        {/* <Button variant="contained" color="primary" sx={{ mr: 1 }}>
        Filter
      </Button> */}
        {/* <Pagination sx={{ ml: 21 }} count={4} color="primary" /> */}

        {/* <Box sx={{ display: "flex", marginLeft: "2%", marginTop: "1%" }}>
          <Select
            sx={{ ml: 21, mt: 2 }}
            name="foodCategoryId"
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
          <Select
            sx={{ ml: 21, mt: 2 }}
            name="foodCategoryId"
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
          <Select
            sx={{ ml: 21, mt: 2 }}
            name="foodCategoryId"
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
        </Box> */}
        <CampaignStageList />
      </Box>
    </>
  );
}
