import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  components: {
    TextField: {
      styleOverrides: {
        ".MuiTextField-root": {
          "&:focus": {
            backgroundColor: "red",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#DC3545",
          color: "white",
          "&:hover": {
            color: "black",
            backgroundColor: "rgba(0, 0, 0, 0.54)",
          },
        },
        outlined: {
          borderColor: "#DC3545",
          color: "black",
          "&:hover": {
            color: "#DC3545",
            borderColor: "#DC3545",
            backgroundColor: "white",
          },
        },
        text: {
          color: "black",
        }
      },
    },
  },
});
