import { Button, Paper, ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ModalInfo = ({ title, description, buttonTitle, isPossible }) => {
  const navigator = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Paper
        sx={{
          border: "2px solid #DC3545",
          padding: '16px',
          margin: "20px",
        }}
      >
        <Typography variant="h3">
          {title}
        </Typography>
        <Typography variant="h6" color="#9C9C9C">
          {description}
        </Typography>
        <Button
          variant="contained"
          disabled={!isPossible}
          onClick={() => navigator("/profile", { replace: false })}
        >
          {buttonTitle}
        </Button>
      </Paper>
    </ThemeProvider>
  )
}

export default ModalInfo;