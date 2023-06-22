import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset",
  },
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node,
};
