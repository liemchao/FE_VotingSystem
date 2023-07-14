import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { PromotionsContainer } from "../../styles/promotions";

import UserCard from "components/Cards/cardCampaign";
import { useDispatch, useSelector } from "react-redux";
import { callAPIgetListCampaigns } from "context/redux/action/action";
import { useContext } from "react";
import { Authen } from "context/authenToken/AuthenToken";

export default function Promotions() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);
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

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    if (campaigns.length > 0) {
      const intervalId = setInterval(() => {
        setMessageIndex((i) => (i + 1) % campaigns.length);

        setShow(true);

        setTimeout(() => {
          setShow(false);
        }, 3000);
      }, 4000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h3" component="h3" gutterBottom>
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
              id={campaigns[messageIndex]?.campaignId}
              title={campaigns[messageIndex]?.title}
              creater={"Moderator"}
              url={campaigns[messageIndex]?.imgUrl}
              dayEnd={campaigns?.endTime}
            />
          </Box>
        </Slide>
      </PromotionsContainer>
    </>
  );
}
