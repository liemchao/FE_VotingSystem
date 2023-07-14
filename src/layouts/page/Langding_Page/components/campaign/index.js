import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useRef } from "react";
import UserCard from "components/Cards/cardCampaign";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function PromotionCarousel() {
  const containerRef = useRef();

  const images = [
    {
      src: "https://caodang.fpt.edu.vn/wp-content/uploads/900x600_happy-bee-x.png",
      alt: "promotion1",
    },
    {
      src: "https://www.fotomoto.vn/wp-content/uploads/2022/09/sinh-nhat-fpt-photobooth-chup-anh-in-hinh-lay-lien-fotomoto-1400x640.jpg.webp",
      alt: "promotion2",
    },
    {
      src: "https://www.fotomoto.vn/wp-content/uploads/2022/09/sinh-nhat-fpt-photobooth-chup-anh-in-hinh-lay-lien-fotomoto-1400x640.jpg.webp",
      alt: "promotion3",
    },
    {
      src: "https://www.fotomoto.vn/wp-content/uploads/2022/09/sinh-nhat-fpt-photobooth-chup-anh-in-hinh-lay-lien-fotomoto-1400x640.jpg.webp",
      alt: "promotion3",
    },
    {
      src: "https://www.fotomoto.vn/wp-content/uploads/2022/09/sinh-nhat-fpt-photobooth-chup-anh-in-hinh-lay-lien-fotomoto-1400x640.jpg.webp",
      alt: "promotion3",
    },
  ];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h3" component="h3" gutterBottom>
          Các chiến dịch đang diễn ra
        </Typography>
      </div>
      <Carousel
        ref={containerRef}
        plugins={[
          "arrows",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          900: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
          300: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
        }}
      >
        {images.map((card, index) => (
          <Box key={index} display="flex" justifyContent="center" alignItems="center">
            <UserCard
              id={card.src}
              title={card.title}
              creater={"Moderator"}
              url={card.src}
              // dayEnd={dayjs(item.endTime).format("DD-MM-YYYY HH:mm:ss")}
            />
          </Box>
        ))}
      </Carousel>
    </>
  );
}
