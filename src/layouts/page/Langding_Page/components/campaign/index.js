import React, { useContext, useEffect } from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useRef } from "react";
import UserCard from "components/Cards/cardCampaign";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Authen } from "context/authenToken/AuthenToken";
import { useDispatch, useSelector } from "react-redux";
import { callAPIgetListCampaigns } from "context/redux/action/action";

export default function PromotionCarousel() {
  const containerRef = useRef();
  const { token } = useContext(Authen);
  const dispatch = useDispatch();
  useEffect(() => {
    const callAPI = async () => {
      await dispatch(callAPIgetListCampaigns(token));
    };
    callAPI();
  }, [dispatch, token]);

  const campaigns = useSelector((state) => {
    return state.campaigns;
  });

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
        {campaigns.map((card, index) => (
          <Box key={card.campaignId} display="flex" justifyContent="center" alignItems="center">
            <UserCard
              id={card.imgUrl}
              title={card.title}
              creater={"Moderator"}
              url={card.src}
              dayEnd={card.endTime}
            />
          </Box>
        ))}
      </Carousel>
    </>
  );
}
