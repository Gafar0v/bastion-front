import {
  Box,
  Divider,
  Typography,
  Button,
  ThemeProvider,
  Paper,
} from "@mui/material";
import { defaultTheme } from "../../theme";
import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useGetAllHwTasksQuery, useSendHwTaskMutation } from "../../services/hwTaskApi";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const TestTask = () => {
  const [fileList, setFileList] = useState(null);

  const [
    sendHwTask,
    {
      data: hwTaskSendData,
      isSuccess: isHwTaskSendSuccess,
      isError: isHwTaskSendError,
      error: hwTaskSendError
    }
  ] = useSendHwTaskMutation();

  const handleFileChange = (e) => {
    setFileList(e.target.files);
  }

  const handleUploadClick = async () => {
    if (!fileList) {
      return;
    }

    const data = new FormData();
    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    })
    console.log('fdsfd', files);

    await sendHwTask(files[0].name);
  }

  const files = fileList ? [...fileList] : [];

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
          <Box margin="20px">
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
                  marginTop: "20px",
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
            <Box>
              <Paper
                sx={{
                  border: "2px solid #ebccd1",
                  padding: "16px",
                  marginTop: "20px",
                  backgroundColor: "#ebccd1",
                }}
              >
                <Typography color="#a94442">Файлов не найдено</Typography>
              </Paper>
            </Box>
            <Box marginTop="20px">
              <Typography fontWeight={700}>Добавить файлы</Typography>
            </Box>
            <Box padding="10px 10px 10px 0px">
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                Выбрать файлы
                <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
              </Button>
              <Typography color="#737373">Выберите PDF-файлы</Typography>
              {files && files.map((item) => (
                <ul>
                  <li>{item.name}</li>
                </ul>
              ))}
            </Box>
            <Box>
              <Button onClick={handleUploadClick} startIcon={<FileUploadIcon />} variant="contained">
                Загрузить
              </Button>
            </Box>
            <Box marginTop="20px">
              <Typography variant="h4">Рецензия</Typography>
              <Paper
                sx={{
                  border: "1px solid #DC3545",
                  padding: "16px",
                  marginTop: "5px",
                }}
              >
                <Typography>Рецензия отсутствует</Typography>
              </Paper>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignContent="center"
            margin="10px"
            width="40%"
          >
            <Paper
              sx={{
                border: "2px solid #DC3545",
                backgroundColor: "#DC3545",
                color: "white",
                padding: "8px",
                // marginTop: "20px",
              }}
            >
              <Typography variant="h6">{isHwTaskSendSuccess ? "Файлы успешно загружены" : "Файлы не загружены"}</Typography>
            </Paper>
            <Paper
              sx={{
                border: "2px solid #DC3545",
                padding: "16px",
                marginTop: "15px",
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
        {!isHwTaskSendSuccess && console.log(hwTaskSendError)}
      </Box>
    </ThemeProvider>
  );
};

export default TestTask;
