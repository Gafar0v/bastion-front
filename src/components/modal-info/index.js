import { Button, Paper, ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "../../theme";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalQuiz from "../modal-quiz";
import Loader from "../../shared/loader/loader";
import { useState } from "react";

const ModalInfo = ({
  title,
  description,
  buttonTitle,
  isPossible,
  redirect,
  isModal = false,
}) => {
  const navigator = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClick = () => {
    if (isModal) {
      setIsOpenModal(true);
    } else {
      navigator(`/${redirect}`, { replace: false });
    }
  };

  const closeModal = () => {
    setIsOpenModal(false);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Paper
        sx={{
          border: "2px solid #DC3545",
          padding: "16px",
          margin: "20px",
        }}
      >
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h6" color="#9C9C9C">
          {description}
        </Typography>
        <Button
          variant="contained"
          disabled={!isPossible}
          onClick={handleClick}
        >
          {buttonTitle}
        </Button>
      </Paper>
      {isOpenModal && <ModalQuiz onClose={closeModal}/>}
    </ThemeProvider>
  );
};

export default ModalInfo;
