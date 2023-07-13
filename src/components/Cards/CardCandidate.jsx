import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import ShareIcon from "@mui/icons-material/Share";

export default function MultipleInteractionCard(props) {
  const { name, image, description, gender, onClickVote, onClickLike, onClickShare } = props;

  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="1">
          <img
            style={{ display: "over", objectFit: "cover" }}
            src={image}
            srcSet={image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="success"
          onClick={onClickShare}
          sx={{
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            right: "1rem",
            bottom: 0,
            transform: "translateY(50%)",
          }}
        >
          <ShareIcon />
        </IconButton>

        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="success"
          onClick={onClickVote}
          sx={{
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            right: "4rem",
            bottom: 0,
            transform: "translateY(50%)",
          }}
        >
          <HowToVoteIcon />
        </IconButton>

        {/* <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="success"
          onClick={onClickLike}
          sx={{
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            right: "1rem",
            bottom: 0,
            transform: "translateY(50%)",
          }}
        >
          <Favorite />
        </IconButton> */}
      </CardOverflow>
      <CardContent>
        <Typography level="h2" fontSize="md">
          <Link href="#multiple-actions" overlay underline="none">
            {name}
          </Link>
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5 }}>
          <Link href="#multiple-actions">{description}</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body3" sx={{ fontWeight: "md", color: "text.secondary" }}>
            21 tuổi
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body3" sx={{ fontWeight: "md", color: "text.secondary" }}>
            {gender}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
