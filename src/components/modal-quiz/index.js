import { Typography, Box, Button } from "@mui/material";
import "./modal-quiz.css";
import { useNavigate } from "react-router-dom";

const ModalQuiz = ({ onClose }) => {
  const navigator = useNavigate();
  return (
    <div className="blur">
      <Box
        display="flex"
        border="1px solid black"
        borderRadius="8px"
        bgcolor="white"
        padding="20px"
        flexDirection="column"
        sx={{
          display: "flex",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography>
          Вы собираетесь начать тест, который займет 1 час. Убедитесь,
          что у вас есть достаточно времени перед началом, и что вы находитесь в
          спокойной обстановке. Приступить к тесту?
        </Typography>
        <Box display="flex" marginTop="20px" justifyContent="space-evenly">
          <Button variant="contained" onClick={() => navigator("/quiz", { replace: false })}>
            Приступить
          </Button>
          <Button variant="outlined" onClick={onClose}>Назад</Button>
        </Box>
      </Box>
    </div>
  );
};

export default ModalQuiz;
