import { Dialog, DialogContent, DialogTitle, Grid, Paper, Button, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import PageHeader from "components/Layout/PageHeader";
import QRCode from "qrcode.react";

//hih
export default function QRPopUp(props) {
  const { OpenPopUp, SetOpenPopUp, link } = props;
  const [input, setInput] = useState([]);

  const handleClose = () => {
    SetOpenPopUp(false);
  };

  const [qrCodeUrl, setQRCodeUrl] = useState("");

  useEffect(() => {
    const canvas = document.getElementById("qr-code-canvas");
    if (canvas) {
      setQRCodeUrl(canvas.toDataURL());
    }
  }, []);

  return (
    <Paper>
      <Dialog maxWidth="md" open={OpenPopUp} onClose={handleClose}>
        <DialogTitle>
          <PageHeader title="Tạo mới chiến dịch" subTitle="Tạo chiến dịch cho riêng bạn" />
        </DialogTitle>
        <DialogContent>
          <QRCode id="qr-code-canvas" value={link} />
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
