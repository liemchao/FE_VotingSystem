import React from "react";
import { useState, useEffect } from "react";

import { Box, Button } from "@mui/material";
import QRPopUp from "components/Popup/QRPopUp";


export default function Text() {
  const [qrCodeUrl, setQRCodeUrl] = useState("");
  const [Link, setLink] = useState(window.location.href);
  const [open, setopen] = useState(false);

  const handleGetQR = () => {
    setopen(true);
  };

  return (
    <Box>
      <Button variant="contained" onClick={() => handleGetQR()}>
        GET-LINK
      </Button>
      <QRPopUp OpenPopUp={open} SetOpenPopUp={setopen} link={Link} />;
    </Box>
  );
}
