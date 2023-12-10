import React from "react";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer, removeAnswer } from "../../redux/features/quiz/quizSlice";
import { useGetQuizQuery, useSendQuizMutation } from "../../services/quizApi";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import CountdownTimer from "../../shared/countdown-timer/countdown-timer";
import "react-toastify/dist/ReactToastify.css";

const QuizCard = () => {
  const { data } = useGetQuizQuery(1);

  const { currentQuestionId, answers } = useSelector((state) => state.quiz);
  const [isReady, setIsReady] = React.useState(false);
  const [isErrorOccured, setIsErrorOccured] = React.useState(false);

  const THREE_DAYS_IN_MS = 1 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  console.log("ANswers", answers);

  const [
    sendAnswer,
    {
      data: answerData,
      isSuccess: isSuccessAnswer,
      isError: isErrorAnswer,
      error: errorAnswer,
    },
  ] = useSendQuizMutation();
  const dispatch = useDispatch();

  const handleSendAnswers = async () => {
    if (answers.length < 5) {
      setIsErrorOccured(true);
      handleOpenSnackbar();
      return;
    }

    await sendAnswer(answers, 1);
    setIsReady(true);
  };

  const navigator = useNavigate();

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {!isReady && (
        <Box position="sticky" top="0" bgcolor="white" zIndex="1">
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </Box>
      )}
      {isReady ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <Box
            display="flex"
            justifyContent="space-evenly"
            width="800px"
            height="400px"
            border="2px solid #DC3545"
            borderRadius="8px"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Typography variant="h3">
                Твой результат:{" "}
                {answerData
                  ? answerData.reduce((acc, val) => acc + val.current_result, 0)
                  : 0}{" "}
                из{" "}
                {answerData
                  ? answerData.reduce((acc, val) => acc + val.max_result, 0)
                  : 0}
                {answerData &&
                  answerData.map((item) => (
                    <Box>
                      <Typography>
                        {item.question_type}: {item.current_result} /{" "}
                        {item.max_result}
                      </Typography>
                    </Box>
                  ))}
              </Typography>
              <Typography sx={{ textAlign: "center" }} variant="h4">
                Далее твои результаты изучат и скоро вернутся к тебе с ответом!
              </Typography>
              <Typography sx={{ textAlign: "center" }} variant="h4">
                Спасибо! Желаем удачи!
              </Typography>

              <Button
                onClick={() => navigator("/cabinet", { replace: false })}
                variant="contained"
              >
                Вернуться на главную страницу
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {data?.questions.map((item) => {
            return (
              <Box display="flex" flexDirection="column" margin="20px">
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  width="80vh"
                  height="40vh"
                  border="2px solid #DC3545"
                  borderRadius="8px"
                >
                  <Box width="30vh">
                    <Typography variant="h3">Вопрос №{item.id}</Typography>
                    <Typography sx={{ textAlign: "center" }} variant="h4">
                      {item?.question}
                    </Typography>
                    <Typography sx={{ textAlign: "center" }} variant="h4">
                      Раздел: {item?.question_type}
                    </Typography>
                    {/*{img_src ? <img src={img_src} alt="Здесь будет картинка"/> : ""}*/}
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    margin="5px"
                  >
                    {item?.answers.map((item) => {
                      return (
                        <Button
                          onClick={() => {
                            const isAnswerSelected = answers.some(
                              (answer) => answer.answer_id === item.id
                            );
                            if (isAnswerSelected) {
                              dispatch(removeAnswer(item.id));
                            } else {
                              dispatch(setAnswer(item.id));
                            }
                          }}
                          key={item.id}
                          size="large"
                          disableRipple
                          sx={{
                            border: "1px solid grey",
                            width: "200px",
                            backgroundColor: answers.some(
                              (answer) => answer.answer_id === item.id
                            )
                              ? "#DC3545"
                              : "inherit",
                            color: answers.some(
                              (answer) => answer.answer_id === item.id
                            )
                              ? "white"
                              : "black",
                          }}
                          variant="text"
                        >
                          {item.answer}
                        </Button>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            );
          })}
          <Button
            onClick={() => {
              handleSendAnswers();
              setTimeout(() => setIsErrorOccured(false), 4000);
            }}
            variant="contained"
          >
            Отправить
          </Button>
        </Box>
      )}
      {isErrorOccured && (
        <Snackbar
          onClose={handleCloseSnackbar}
          autoHideDuration={4000}
          open={openSnackbar}
        >
          <Alert severity="error" onClose={handleCloseSnackbar}>
            Заполните, пожалуйста, все варианты ответов!
          </Alert>
        </Snackbar>
      )}
    </ThemeProvider>
  );
};

export default QuizCard;
