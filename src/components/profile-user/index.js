import ClientHeader from "../../shared/client-header/client-header";
import {
  Alert,
  Box,
  Button,
  Divider,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { defaultTheme } from "../../theme";
import {
  useGetResumeQuery,
  useSendResumeMutation,
  useUpdateResumeMutation,
} from "../../services/resumeApi";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField } from "../../redux/features/resume/resumeSlice";
import AutoresizeTextarea from "../../shared/autoresize-textarea/autoresize-textarea";
import { useNavigate } from "react-router-dom";

const ProfileUser = () => {
  const {
    phone_number,
    military_duty,
    metro_station,
    good_qualities,
    bad_qualities,
    bad_habits,
    reasons_for_working,
    good_job_qualities,
    resume_src,
    education,
    busyness,
  } = useSelector((state) => state.resume);

  const { data, isSuccess, isError, error } = useGetResumeQuery();

  console.log(data);

  const [
    updateResume,
    {
      data: resumeUpdateData,
      isSuccess: isResumeUpdateSuccess,
      isError: isResumeUpdateError,
      error: resumeUpdateError,
    },
  ] = useUpdateResumeMutation();

  const [
    sendResume,
    {
      data: resumeSendData,
      isSuccess: isResumeSendSuccess,
      isError: isResumeSendError,
      error: resumeSendError,
    },
  ] = useSendResumeMutation();

  const dispatch = useDispatch();

  const fullNameJSON = localStorage.getItem("fullName");
  const { name, surname } = fullNameJSON
    ? JSON.parse(fullNameJSON)
    : { name: "", surname: "" };

  const emailJSON = localStorage.getItem("userInfo");
  const { email } = emailJSON ? JSON.parse(emailJSON) : { email: "" };

  const handleUpdateResume = async () => {
    if (
      phone_number &&
      military_duty &&
      metro_station &&
      good_qualities &&
      bad_qualities &&
      bad_habits &&
      reasons_for_working &&
      good_job_qualities &&
      resume_src &&
      education &&
      busyness
    ) {
      await updateResume({
        phone_number,
        military_duty,
        metro_station,
        good_qualities,
        bad_qualities,
        bad_habits,
        reasons_for_working,
        good_job_qualities,
        resume_src,
        education,
        busyness,
      });

      // localStorage.setItem(
      //   "userResumeInfo",
      //   JSON.stringify({
      //     phone_number: phone_number,
      //     military_duty: military_duty,
      //     metro_station: metro_station,
      //     good_qualities: good_qualities,
      //     bad_qualities: bad_qualities,
      //     bad_habits: bad_habits,
      //     reasons_for_working: reasons_for_working,
      //     good_job_qualities: good_job_qualities,
      //     resume_src: resume_src,
      //     education: education,
      //     busyness: busyness,
      //   })
      // );
    }
  };

  const handleSendResume = async () => {
    if (
      phone_number &&
      military_duty &&
      metro_station &&
      good_qualities &&
      bad_qualities &&
      bad_habits &&
      reasons_for_working &&
      good_job_qualities &&
      resume_src &&
      education &&
      busyness
    ) {
      await sendResume({
        phone_number,
        military_duty,
        metro_station,
        good_qualities,
        bad_qualities,
        bad_habits,
        reasons_for_working,
        good_job_qualities,
        resume_src,
        education,
        busyness,
      });

      // localStorage.setItem(
      //   "userResumeInfo",
      //   JSON.stringify({
      //     phone_number: phone_number,
      //     military_duty: military_duty,
      //     metro_station: metro_station,
      //     good_qualities: good_qualities,
      //     bad_qualities: bad_qualities,
      //     bad_habits: bad_habits,
      //     reasons_for_working: reasons_for_working,
      //     good_job_qualities: good_job_qualities,
      //     resume_src: resume_src,
      //     education: education,
      //     busyness: busyness,
      //   })
      // );
    }
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const navigator = useNavigate();

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
      {isResumeUpdateSuccess && (
        <Snackbar
          onClose={handleCloseSnackbar}
          autoHideDuration={4000}
          open={openSnackbar}
        >
          <Alert severity="success" onClose={handleCloseSnackbar}>
            {isResumeUpdateSuccess
              ? `Данные обновлены!`
              : `Что-то пошло не так! Попробуйте еще раз!`}
            {isResumeUpdateError.status === 403 ? "Данные уже обновлены!" : ""}
          </Alert>
        </Snackbar>
      )}
      {isResumeSendSuccess && (
        <Snackbar
          onClose={handleCloseSnackbar}
          autoHideDuration={4000}
          open={openSnackbar}
        >
          <Alert severity="success" onClose={handleCloseSnackbar}>
            {isResumeSendSuccess
              ? `Данные отправлены! Вы будете перенаправлены на главную страницу!`
              : `Что-то пошло не так! Попробуйте еще раз!`}
            {isResumeSendError ? "Данные уже отправлены на проверку!" : ""}
          </Alert>
        </Snackbar>
      )}
      {isResumeSendError && (
        <Snackbar
          onClose={handleCloseSnackbar}
          autoHideDuration={4000}
          open={openSnackbar}
        >
          <Alert severity="info" onClose={handleCloseSnackbar}>
            {!isResumeUpdateError ? "Данные уже отправлены на проверку!" : ""}
          </Alert>
        </Snackbar>
      )}
      {isResumeUpdateError && (
        <Snackbar
          onClose={handleCloseSnackbar}
          autoHideDuration={4000}
          open={openSnackbar}
        >
          <Alert severity="info" onClose={handleCloseSnackbar}>
            {!isResumeSendError ? "Данные уже отправлены на проверку!" : ""}
          </Alert>
        </Snackbar>
      )}
      <ClientHeader title="Личный кабинет" />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="50%">
          <Box margin={5}>
            <Typography variant="h5">Анкета </Typography>
            <Divider
              component="div"
              sx={{ marginTop: 2, borderBottomWidth: 2 }}
            />
          </Box>

          <Box margin={5}>
            <Box margin={3}>
              <Typography variant="h4">Ответьте на вопросы</Typography>
            </Box>
            {/* ФИО */}
            <Box margin={3}>
              <Typography variant="h5">ФИО: </Typography>
              <TextField
                sx={{
                  mt: "12px",
                }}
                value={`${name} ${surname}`}
                label="ФИО"
                required
                fullWidth
                name="fio"
              />
            </Box>

            {/* Номер телефона */}
            <Box margin={3}>
              <Typography variant="h5">Номер телефона: </Typography>
              <TextField
                sx={{
                  mt: "12px",
                }}
                value={phone_number}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "phone_number", value: e.target.value })
                  )
                }
                required
                fullWidth
                name="phone_number"
                label="Номер телефона"
              />
            </Box>

            {/* Email */}
            <Box margin={3}>
              <Typography variant="h5">Email: </Typography>
              <TextField
                sx={{
                  mt: "12px",
                }}
                value={email}
                required
                fullWidth
                name="email"
                label="Email"
              />
            </Box>

            {/* Место проживания */}
            <Box margin={3}>
              <Typography variant="h5">Место проживания: </Typography>
              <TextField
                sx={{
                  mt: "12px",
                }}
                value={metro_station}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "metro_station", value: e.target.value })
                  )
                }
                required
                fullWidth
                name="metro_station"
                label="Место проживания"
              />
            </Box>

            {/* Образование */}
            <Box margin={3}>
              <Typography variant="h5">Образование: </Typography>
              <TextField
                sx={{
                  mt: "12px",
                }}
                value={education}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "education", value: e.target.value })
                  )
                }
                required
                fullWidth
                name="education"
                label="Образование"
              />
            </Box>

            {/* Военная обязанность */}
            <Box margin={3}>
              <Typography variant="h5">Военная обязанность: </Typography>
              <TextField
                sx={{
                  mt: "12px",
                }}
                value={military_duty}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "military_duty", value: e.target.value })
                  )
                }
                required
                fullWidth
                name="military_duty"
                label="Военная обязанность"
              />
            </Box>

            {/* Стаж работы */}
            <Box margin={3}>
              <Typography variant="h5">
                Расскажите про ваш опыт работы:{" "}
              </Typography>
              <AutoresizeTextarea
                value={busyness}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "busyness", value: e.target.value })
                  )
                }
                required
                minRows={3}
                name="busyness"
                placeholder="Опыт работы"
              />
            </Box>

            {/* Причины работать в компании */}
            <Box margin={3}>
              <Typography variant="h5">
                Опишите в 2-3 предложениях, почему Вы хотите работать в нашей
                компании:{" "}
              </Typography>
              <AutoresizeTextarea
                value={reasons_for_working}
                onChange={(e) =>
                  dispatch(
                    setField({
                      field: "reasons_for_working",
                      value: e.target.value,
                    })
                  )
                }
                required
                minRows={3}
                name="reasons_for_working"
                placeholder="Причины работать в компании"
              />
            </Box>

            {/* Программы, которыми вы пользуетесь */}
            <Box margin={3}>
              <Typography variant="h5">
                Компьютерные программы для автоматизированного проектирования,
                которвыми Вы владеете. Также оцените степень владения ими от 1
                до 10 баллов.{" "}
              </Typography>
              <AutoresizeTextarea
                required
                value={good_job_qualities}
                onChange={(e) =>
                  dispatch(
                    setField({
                      field: "good_job_qualities",
                      value: e.target.value,
                    })
                  )
                }
                minRows={3}
                name="good_job_qualities"
                placeholder="Программы, которыми вы пользуетесь"
              />
            </Box>

            {/* Личные качества (положительные) */}
            <Box margin={3}>
              <Typography variant="h5">
                Расскажите про свои положительные личные качества (2-3
                предложения):{" "}
              </Typography>
              <AutoresizeTextarea
                required
                value={good_qualities}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "good_qualities", value: e.target.value })
                  )
                }
                minRows={3}
                name="good_qualities"
                placeholder="Личные качества (положительные)"
              />
            </Box>

            {/* Личные качества (отрицательные) */}
            <Box margin={3}>
              <Typography variant="h5">
                Расскажите про свои отрицательные личные качества (2-3
                предложения):{" "}
              </Typography>
              <AutoresizeTextarea
                value={bad_qualities}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "bad_qualities", value: e.target.value })
                  )
                }
                required
                minRows={3}
                name="bad_qualities"
                placeholder="Личные качества (отрицательные)"
              />
            </Box>

            {/* Вредные привычки */}
            <Box margin={3}>
              <Typography variant="h5">
                Расскажите про свои вредные привычки (2-3 предложения):{" "}
              </Typography>
              <AutoresizeTextarea
                value={bad_habits}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "bad_habits", value: e.target.value })
                  )
                }
                required
                minRows={3}
                name="bad_habits"
                placeholder="Вредные привычки"
              />
            </Box>

            {/* Ссылка на резюме */}
            <Box margin={3}>
              <Typography variant="h5">
                Прикрепите ссылку на резюме с hh.ru:{" "}
              </Typography>
              <TextField
                sx={{
                  mt: "12px",
                }}
                value={resume_src}
                onChange={(e) =>
                  dispatch(
                    setField({ field: "resume_src", value: e.target.value })
                  )
                }
                required
                fullWidth
                name="resume_src"
                label="Ссылка на резюме"
              />
            </Box>
          </Box>
        </Box>
        <Box margin={3}>
          <Button
            size="large"
            sx={{ marginRight: "10px" }}
            variant="outlined"
            onClick={() => {
              handleUpdateResume();
              handleOpenSnackbar();
            }}
          >
            Редактировать
          </Button>
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              handleSendResume();
              handleOpenSnackbar();
              setTimeout(() => {
                navigator("/cabinet", { replace: false });
              }, 4500);
            }}
          >
            Отправить
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProfileUser;
