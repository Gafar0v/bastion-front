import { Box, Button, InputAdornment, TextField, ThemeProvider, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeSurname,
  changeEmail,
  changePassword,
  changeVerifyPassword,
  checkMatchPasswords,
} from "../../redux/features/signUp/signUpSlice";
import { defaultTheme } from "../../theme";

import { useRegisterUserMutation } from "../../services/authApi";
import toast from "bootstrap/js/src/toast";
import { setUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const { name, surname, email, password, verifyPassword, isMatchPasswords } = useSelector((state) => state.signUp);

  const navigation = useNavigate();

  const dispatch = useDispatch();
  const [isVisiblePassword, setVisiblePassword] = React.useState(false);
  const [isVisibleConfirmPassword, setVisibleConfirmPassword] = React.useState(false);

  const [ registerUser, {data: registerData, isSuccess: isRegisterSuccess, isError: isRegisterError, error: registerError } ] = useRegisterUserMutation();

  const handleRegister =  async () => {
    if (password !== verifyPassword) {
      return toast.error("Password don't match")
    }

    if (name && surname && email && password) {
       await registerUser({
        "firstname": name,
        "lastname": surname,
        "email": email,
        "password": password
      })
    }
  }

  React.useEffect(() => {
    if (isRegisterSuccess) {
      dispatch(setUser({ token: registerData.token }))
      navigation("/cabinet", { replace: false })
    }
  }, [isRegisterSuccess])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box paddingTop="24px">
        <Box>
          <Box display="flex" justifyContent="space-beetween">
            <TextField
              name="name"
              label="Имя"
              value={name}
              onChange={(e) => dispatch(changeName(e.target.value))}
              type="text"
              variant="outlined"
              fullWidth
              autoComplete="off"
              sx={{ paddingBottom: "15px", paddingRight: "15px" }}
            />
            <TextField
              name="surname"
              label="Фамилия"
              value={surname}
              onChange={(e) => dispatch(changeSurname(e.target.value))}
              type="text"
              variant="outlined"
              fullWidth
              autoComplete="off"
              sx={{ paddingBottom: "15px" }}
            />
          </Box>
          <TextField
            name="email"
            label="Адрес электронной почты"
            variant="outlined"
            value={email}
            onChange={(e) => dispatch(changeEmail(e.target.value))}
            fullWidth
            autoComplete="off"
            sx={{ paddingBottom: "15px" }}
          />

          <TextField
            name="password"
            label="Пароль"
            value={password}
            type={isVisiblePassword ? "text" : "password"}
            onChange={(e) => dispatch(changePassword(e.target.value))}
            variant="outlined"
            fullWidth
            autoComplete="off"
            sx={{ paddingBottom: "15px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={() => setVisiblePassword((prev) => !prev)}
                  position="end"
                  sx={{ cursor: "pointer" }}
                >
                  {isVisiblePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Повторите пароль"
            type={isVisibleConfirmPassword ? "text" : "password"}
            onChange={(e) => dispatch(changeVerifyPassword(e.target.value))}
            value={verifyPassword}
            variant="outlined"
            fullWidth
            autoComplete="off"
            sx={{ paddingBottom: "15px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={() => setVisibleConfirmPassword((prev) => !prev)}
                  position="end"
                  sx={{ cursor: "pointer" }}
                >
                  {isVisibleConfirmPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </InputAdornment>
              ),
            }}
          />
          {!isMatchPasswords && (
            <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
              <Typography color={"red"}>Пароли не совпадают!</Typography>
            </Box>
          )}
        </Box>
        <Box>
          <Box>
            <Box>
              <Button
                disabled={!isMatchPasswords}
                onClick={() => handleRegister()}
                variant="contained"
                fullWidth
                sx={{ padding: "12px" }}
              >
                Зарегистрироваться
              </Button>
            </Box>
            <Box
              sx={{ paddingTop: "10px", display: "flex", justifyContent: "center" }}
            >
              <Typography variant="body1" color={"GrayText"}>
                или
              </Typography>
            </Box>
            <Box sx={{ paddingTop: "10px" }}>
              <Button
                onClick={() => navigation("/sign-in", { replace: false })}
                fullWidth
                variant="outlined"
                sx={{
                  textTransform: "none",
                  padding: "12px",
                }}
              >
                Войти
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SignUp;
