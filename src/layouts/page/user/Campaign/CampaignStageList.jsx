// import { filter } from "lodash";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Card, Button, Typography, CardMedia, CardContent, CardActions, Grid } from "@mui/material";
export default function CampaignStageList() {
  const navigate = useNavigate();
  const handleinvite = () => {
    navigate("/user/detailcandidate");
  };
  const items = [
    {
      title: "CanpaignStage 1 ",
      subtitle: "Giai đoạn khởi đầu",
      slogan: "01/05/2023-01/06/2023",
      image:
        "https://cdn.tgdd.vn/Files/2020/03/30/1245645/vector-landscape-wallpaper-by-wallsbyjfl-_2048x1152-800-resize.jpg",
    },
    {
      title: "CanpaignStage 2",
      subtitle: "Giai đoạn nước rút",
      slogan: "01/06/2023-01/08/2023",
      image:
        "https://cdn.tgdd.vn/Files/2020/03/30/1245645/vector-landscape-wallpaper-by-wallsbyjfl-_2048x1152-800-resize.jpg",
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: 2,
      }}
    >
      {items.map((card, index) => (
        <Grid item xs={6} md={4} key={index}>
          <Card
            sx={{
              maxWidth: 356,
              padding: "1rem 1rem 1rem 1rem",
              borderRadius: "18px",
            }}
          >
            <CardMedia
              sx={{
                height: 200,
                display: "cover",
              }}
              image={card.image}
              title="green iguana"
            />
            <CardContent
              sx={{
                height: 120,
              }}
            >
              <Typography gutterBottom variant="h4" component="div">
                {card.title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {card.subtitle}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                "{card.slogan}"
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{
                  position: "relative",
                  left: "-1rem",
                  bottom: "-1rem",
                  display: "inline - flex",
                  width: "9rem",
                  height: "3rem",
                  background: "var(--10)",
                  color: "var(--badge-text)",
                  backgroundColor: "#ffcc33",
                  boxShadow: "0 0 0.2rem 0.1rem var(--card-bg)",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "30px",
                  marginLeft: "1rem",
                  fontSize: "1rem",
                  fontWeight: "700",
                  border: "0",
                }}
                onClick={handleinvite}
              >
                Tham Gia
              </Button>
              <Button
                sx={{
                  right: "-4rem",
                  bottom: "-1rem",
                }}
                size="small"
              >
                Chi tiết
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
