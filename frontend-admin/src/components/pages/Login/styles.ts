import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    loginContainer: {},
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
