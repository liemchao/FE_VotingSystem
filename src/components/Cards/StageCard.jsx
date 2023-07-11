import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";

export default function StageCard(props) {
  const { title, onClickJoin } = props;
  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 180 }}>
          <img
            src="https://nhadepso.com/wp-content/uploads/2023/02/tang-ban-50-hinh-nen-iphone-x-full-hd-dep-sang-chanh-nhat-1.jpg"
            srcSet="https://nhadepso.com/wp-content/uploads/2023/02/tang-ban-50-hinh-nen-iphone-x-full-hd-dep-sang-chanh-nhat-1.jpg&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h3" fontWeight="xl" color="neutral" textColor="text.primary" overlay>
          {title}
        </Typography>
        <Typography href="#product-card" level="body2">
          "Chúng ta hãy bình chọn ngay đi"
        </Typography>

        <Typography
          fontSize="xl"
          fontWeight="xl"
          sx={{ mt: 1 }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="warning">
              Giai đoạn cuối
            </Chip>
          }
        ></Typography>
        <Typography level="body2">
          (Only <b>7</b> left in day!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button
          sx={{
            backgroundColor: "#FFA500",
            "&:hover": {
              backgroundColor: "#F7941D",
            },
          }}
          variant="solid"
          size="lg"
          onClick={onClickJoin}
        >
          Tham gia
        </Button>
      </CardOverflow>
    </Card>
  );
}
