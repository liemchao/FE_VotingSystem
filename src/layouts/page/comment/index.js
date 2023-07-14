import React from "react";
import { Avatar, Box, Button, TextField } from "@mui/material";
import ButtonCustomize from "assets/theme/components/button/ButtonCustomize";

const CommentForm = () => {
  const [comment, setComment] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle comment submission logic here
    setComment("");
  };

  return (
    <Box display="flex" alignItems="center" mt={2}>
      <Avatar src="https://i.stack.imgur.com/bl1g5.png?s=192&g=1" alt="Avatar" />
      <Box ml={2} flexGrow={2}>
        <form onSubmit={handleSubmit}>
          <TextField
            multiline
            rows={2}
            fullWidth
            placeholder="Đánh giá chiến dịch này"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <Box mt={1} display="flex" justifyContent="flex-end">
            <ButtonCustomize
              nameButton="Gửi"
              bgColor="#FFA500"
              hovercolor="#F7941D"
              onClick={() => {
                handleNavigate();
              }}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CommentForm;
