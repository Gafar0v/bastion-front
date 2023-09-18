import { Box, Typography } from "@mui/material";
import ClientHeader from "../../shared/client-header/client-header";
import ModalInfo from "../modal-info";
import { useGetResumeQuery } from "../../services/resumeApi";

const Cabinet = () => {
  const { data } = useGetResumeQuery();
  localStorage.setItem(
    "userResumeInfo",
    JSON.stringify(data)
  )
  return (
    <Box>
      <Box>
        <ClientHeader title="Главная" />
      </Box>
      <Box
        margin="20px"
      >
        <Typography variant="h3">
          Инженер-проектировщик (осень 2023):
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-beetween"
        alignItems="center"
      >
        <ModalInfo title="Пройти демо-тест"
                   description="Для того, чтобы пройти демо-тест необходимо отправить резюме на проверку"
                   isPossible={false}
                   buttonTitle="Пройти"
        />
        <ModalInfo title="Пройти финальный тест"
                   description="Для того, чтобы пройти финальный тест необходимо, чтобы работодатель проверил резюме"
                   isPossible={false}
                   buttonTitle="Пройти"
        />
        <ModalInfo title="Редактировать резюме"
                   description="Не стестняйтесь рассказывать о своем опыте, потому что анкета влияется на итоговый результат"
                   buttonTitle="Редактировать"
                   isPossible={true}
        />

      </Box>
    </Box>
  );
};

export default Cabinet;