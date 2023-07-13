import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";
import { Rating } from "@mui/material";

export default function UserCard(props) {
  const { title, datetime, url, creater, onClickJoin, onClickShare, dayEnd } = props;

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: { xs: "auto", sm: "initial" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "block",
          width: "1px",
          bgcolor: "warning.300",
          left: "500px",
          top: "-24px",
          bottom: "-24px",
          "&::before": {
            top: "4px",
            // content: '"vertical"',
            display: "block",
            position: "absolute",
            right: "0.5rem",
            color: "text.tertiary",
            fontSize: "sm",
            fontWeight: "lg",
          },
          "&::after": {
            top: "4px",
            // content: '"horizontal"',
            display: "block",
            position: "absolute",
            left: "0.5rem",
            color: "white",
            fontSize: "sm",
            fontWeight: "lg",
          },
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          [`& > *`]: {
            "--stack-point": "500px",
            minWidth:
              "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
          },
          overflow: "auto",
          resize: "horizontal",
        }}
      >
        <AspectRatio ratio="1" maxHeight={182} sx={{ minWidth: 182, flex: 1 }}>
          <img src={url} srcSet={url} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {title}
          </Typography>
          <Typography level="body2" fontWeight="lg" textColor="text.tertiary">
            {creater}
          </Typography>
          <Sheet
            sx={{
              bgcolor: "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 },
            }}
          >
            <div>
              <Typography level="body3" fontWeight="lg">
                Ứng cử viên
              </Typography>
              <Typography fontWeight="lg">34</Typography>
            </div>
            <div>
              <Typography level="body3" fontWeight="lg">
                Thời gian kết thúc
              </Typography>
              <Typography fontWeight="lg">{dayEnd}</Typography>
            </div>
            <div>
              <Typography level="body3" fontWeight="lg">
                Đánh giá
              </Typography>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </Sheet>
          <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <ButtonCustomize
              nameButton="Chia sẻ"
              bgColor="#FFA500"
              hovercolor="#F7941D"
              onClick={onClickShare}
            />
            <ButtonCustomize
              nameButton="Tham gia"
              bgColor="#FFA500"
              hovercolor="#F7941D"
              onClick={onClickJoin}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
