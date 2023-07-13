import { CardContent, CardMedia, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { PromotionsContainer } from "../../styles/promotions";

import UserCard from "components/Cards/cardCampaign";

const cards = [
  {
    id: 1,
    title: "20% off on your first order!",
    description: "Use code FIRST20 at checkout.",
    image:
      "https://www.fotomoto.vn/wp-content/uploads/2022/09/sinh-nhat-fpt-photobooth-chup-anh-in-hinh-lay-lien-fotomoto-1400x640.jpg.webp",
  },
  {
    id: 2,
    title: "Summer sale starts now, visit any store.",
    description: "Get up to 50% off on selected items.",
    image:
      "https://www.fotomoto.vn/wp-content/uploads/2022/09/sinh-nhat-fpt-photobooth-chup-anh-in-hinh-lay-lien-fotomoto-1400x640.jpg.webp",
  },
  {
    id: 3,
    title: "Please like and subscribe :)",
    description: "Follow us on social media for more updates.",
    image:
      "https://www.fotomoto.vn/wp-content/uploads/2022/09/sinh-nhat-fpt-photobooth-chup-anh-in-hinh-lay-lien-fotomoto-1400x640.jpg.webp",
  },
];
export default function Promotions() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % cards.length);

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Các chiến dịch tiêu biểu
        </Typography>
      </div>
      <PromotionsContainer ref={containerRef} overflow="hidden">
        <Slide
          direction={show ? "left" : "right"}
          in={show}
          container={containerRef.current}
          timeout={{
            enter: 500,
            exit: 100,
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <UserCard
              id={cards[messageIndex].image}
              title={cards[messageIndex].title}
              creater={"Moderator"}
              url={cards[messageIndex].image}
              // dayEnd={dayjs(item.endTime).format("DD-MM-YYYY HH:mm:ss")}
            />
          </Box>
        </Slide>
      </PromotionsContainer>
    </>
  );
}
