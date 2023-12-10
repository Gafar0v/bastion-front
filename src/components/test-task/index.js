import {
  Box,
  Divider,
  Typography,
  Button,
  ThemeProvider,
  Paper,
} from "@mui/material";
import { defaultTheme } from "../../theme";
import CreateIcon from "@mui/icons-material/Create";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";

const TestTask = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <Box margin="20px">
          <Typography variant="h4">Тест Тестовый</Typography>
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="center"
        >
          <Box
            margin="20px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
            >
              <Button startIcon={<CreateIcon />} variant="contained">
                Редактировать
              </Button>
              <Button startIcon={<AccessTimeIcon />} variant="contained">
                История изменений
              </Button>
            </Box>
            <Box>
              <Paper
                sx={{
                  border: "2px solid #DC3545",
                  padding: "16px",
                  margin: "20px",
                }}
              >
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    Тема: <span style={{ color: "red" }}>НЕ УКАЗАНА</span>
                  </Typography>
                  <Typography variant="h5" fontWeight={700}>
                    ФИО проверяющего:{" "}
                    <span style={{ color: "red" }}>НЕ УКАЗАНЫ</span>
                  </Typography>
                  <Typography variant="h6">
                    <DoneIcon sx={{ verticalAlign: "middle" }} /> Разрешить
                    публикацию материалов во внутренней сети компании
                  </Typography>
                  <Typography variant="h6">
                    <DoneIcon sx={{ verticalAlign: "middle" }} />
                    Разрешить публикацию материалов в сети Интернет
                  </Typography>
                  <Typography variant="h6">
                    <DoneIcon sx={{ verticalAlign: "middle" }} />
                    Работа не имеет грифа ДСП и не содержит сведений,
                    представляющих патентную или коммерческую тайну
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignContent="center"
            margin="20px"
            width="40%"
          >
            <Paper
              sx={{
                border: "2px solid #DC3545",
                backgroundColor: "#DC3545",
                color: "white",
                padding: "16px",
                margin: "20px"
              }}
            >
              <Typography variant="h5">Не загружено</Typography>
            </Paper>
            <Paper
              sx={{
                border: "2px solid #DC3545",
                padding: "16px",
                margin: "20px",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Вид работы
                  <Typography>ОТК</Typography>
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  Название
                  <Typography>ОТК</Typography>
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  Номер
                  <Typography>ОТК</Typography>
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  Ответственный за проверку
                  <Typography>ОТК</Typography>
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TestTask;
