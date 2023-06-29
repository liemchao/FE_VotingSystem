import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { orange } from "@mui/material/colors";

export default function ButtonCustomize(props) {
  const {
    nameButton,
    onClick,
    component,
    to,
    type,
    width,
    marginTop,
    marginLeft,
    paddingBottom,
    endIcon,
    border,
    bgColor,
    boxShadow,
    borderRadius,
    height,
    color,
    startIcon,
    paddingLeft,
    variant,
    marginRight,
  } = props;
  const ColorButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.getContrastText("#ffff"),
    backgroundColor: bgColor,
    "&:hover": {
      backgroundColor: orange[700],
      color: "white",
    },
    display: "center",
    textTransform: "none",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  }));
  return (
    <ColorButton
      type={type}
      onClick={onClick}
      component={component}
      to={to}
      variant={variant}
      endIcon={endIcon}
      startIcon={startIcon}
      sx={{
        color: { color },
        width: { width },
        height: { height },
        marginTop: { marginTop },
        marginLeft: { marginLeft },
        paddingBottom: { paddingBottom },
        paddingLeft: { paddingLeft },
        boxShadow: { boxShadow },
        border: { border },
        borderRadius: borderRadius,
        marginRight: { marginRight },
      }}
    >
      {nameButton}
    </ColorButton>
  );
}
