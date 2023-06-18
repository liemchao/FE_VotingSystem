import { Button, Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";
import Iconify from "assets/theme/components/icon/Iconify";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: red[500],
    height: "2.5rem",

    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: red[700],
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const GoogleButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={onClick}
      startIcon={<Iconify icon="ri:google-fill" />}
      sx={{}}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;
