import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    jobFormWrap: {
      position: "sticky",
      top: 50,
      height: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      boxSizing: "border-box",
      border: "2px solid rgba(255, 255, 255, 0.06)",
      background: "rgba(255, 255, 255, 0.04)",
      padding: 32,
      borderRadius: 32,
      "& .form-title": {
        font: theme.typography.nn72432.font,
        textAlign: "center",
        margin: "0 0 20px",
      },
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    formInput: {
      minHeight: 52,
      width: "100%",
      background: "rgba(255, 255, 255, 0.08)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: 8,
      padding: "13px 16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      "& input, textarea": {
        width: "100%",
        border: "none",
        background: "transparent",
        outline: "none",
        color: "#fff",
        font: theme.typography.nn41424.font,
        padding: 0,
        "&:-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus":
          {
            background: "transparent !important",
            outline: "none !important",
            WebkitTextFillColor: "#fff",
            transition: "background-color 5000s ease-in-out 0s",
          },
      },
      "& .error": {
        color: "red",
      },
    },
    groupInput: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
    },
    groupName: {
      width: "100%",
      gap: 8,
      display: "flex",
      flexDirection: "column",
    },
    uploadInput: {
      padding: 6,
      paddingLeft: 16,
      "& .cv-label": {
        maxWidth: "calc(100% - 80px)",
      },
      "& label": {
        width: 100,
        height: 40,
        marginLeft: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        borderRadius: 4,
        color: "#fff",
        outline: "none",
        border: "none",
        cursor: "pointer",
        position: "relative",
        font: theme.typography.nn71420.font,
        "& input": {
          width: "100%",
          height: "100%",
          position: "absolute",
        },
      },
    },
    cvNote: {
      margin: 0,
      color: "rgba(255, 255, 255, 0.6)",
      font: "normal normal 400 12px/20px Plus Jakarta Sans",
      paddingLeft: 8,
      marginTop: -4,
    },
    btnApply: {
      height: 52,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#000",
      background: "#00C7F4",
      border: "none",
      borderRadius: 4,
      outline: "none",
      font: theme.typography.nn71420.font,
      transition: "0.5s",
      "&:hover": {
        cursor: "pointer",
        letterSpacing: "1px",
      },
      "&:disabled": {
        cursor: "not-allowed",
      },
    },

    [theme.breakpoints.down("lg")]: {
      jobFormWrap: {
        margin: "0 auto",
        maxWidth: "min(620px, 100%)",
        width: "100%",
      },
      groupName: {
        flexDirection: "row",
      },
    },

    [theme.breakpoints.only("xs")]: {
      jobFormWrap: {
        padding: "24px 20px",
      },
      groupName: {
        flexDirection: "column",
      },
    },
  };
});

export default useStyles;
