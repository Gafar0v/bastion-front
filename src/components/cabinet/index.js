import { Box, Grid, Typography } from "@mui/material";
import ClientHeader from "../../shared/client-header/client-header";
import ModalInfo from "../modal-info";
import { useGetResumeQuery } from "../../services/resumeApi";
import Loader from "../../shared/loader/loader";

const Cabinet = () => {
  const { data, isLoading } = useGetResumeQuery();
  localStorage.setItem("userResumeInfo", JSON.stringify(data));
  const userInfoJSON = localStorage.getItem("userInfo");
  const role = userInfoJSON ? JSON.parse(userInfoJSON).role : "";

  return (
    <Box>
      <Box>
        <ClientHeader title="Главная" />
      </Box>
      <Box margin="20px">
        <Typography variant="h3">
          Инженер-проектировщик (осень 2023):
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-beetween" alignItems="center">
        {role === "USER" ? (
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <ModalInfo
                title="Пройти демо-тест"
                description="Для того, чтобы пройти демо-тест необходимо отправить резюме на проверку"
                isPossible={true}
                buttonTitle="Пройти"
                isModal={true}
                redirect="quiz"
              />
            </Grid>
            <Grid item xs={4}>
              <ModalInfo
                title="Пройти финальный тест"
                description="Для того, чтобы пройти финальный тест необходимо, чтобы работодатель проверил резюме"
                isPossible={false}
                buttonTitle="Пройти"
                redirect="profile"
              />
            </Grid>
            <Grid item xs={4}>
              <ModalInfo
                title="Редактировать резюме"
                description="Не стестняйтесь рассказывать о своем опыте, потому что анкета влияется на итоговый результат"
                buttonTitle="Редактировать"
                isPossible={true}
                redirect="profile"
              />
            </Grid>
            <Grid item xs={4}>
              <ModalInfo
                title="Отправка чертежного задания"
                description="Для того, чтобы решить чертежное задание необходимо, чтобы работодатель проверил резюме"
                isPossible={true}
                buttonTitle="Пройти"
                redirect="test-task"
              />
            </Grid>
          </Grid>
        ) : (
          <Typography>123</Typography>
        )}
      </Box>
      {isLoading && <Loader />}
    </Box>
  );
};

export default Cabinet;
