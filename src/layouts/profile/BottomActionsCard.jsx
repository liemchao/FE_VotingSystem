import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
// import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { CardActions } from "@mui/material";

export default function BottomActionsCard(props) {
  let { avatar, title } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src={avatar} size="lg" />
      </Box>
      <CardContent>
        <Typography level="h5" fontWeight="lg">
          {title}
        </Typography>
        <Typography level="body2">
          We are a community of developers prepping for coding interviews, participate, chat with
          others and get better at interviewing.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton variant="outlined" color="neutral" sx={{ mr: "auto" }}>
          <FavoriteBorder />
        </IconButton>
        <Button variant="outlined" color="neutral">
          View
        </Button>
        <Button variant="solid" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
  );
}
