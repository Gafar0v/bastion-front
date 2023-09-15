import { Box, Button, InputAdornment, TextField, ThemeProvider, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  inputEmail,
  inputPassword,
} from "../../redux/features/signIn/signInSlice";
import { defaultTheme } from "../../theme";
import { useLoginUserMutation } from "../../services/authApi";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { email, password } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const [isVisiblePassword, setVisiblePassword] = React.useState(false);
  const [ loginUser, { data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError } ] = useLoginUserMutation();
  const navigator = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      await loginUser({
        email, password
      })
    }
  }

  React.useEffect(() => {
    if (isLoginSuccess) {
      navigator("/cabinet", { replace: false })
    }
  })
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <Box paddingTop="24px">
          <TextField
            name="email"
            value={email}
            onChange={(e) => dispatch(inputEmail(e.target.value))}
            label="Адрес электронной почты"
            variant="outlined"
            fullWidth
            autoComplete="off"
            sx={{ paddingBottom: "15px" }}
          />

          <TextField
            name="password"
            label="Пароль"
            value={password}
            onChange={(e) => dispatch(inputPassword(e.target.value))}
            type={isVisiblePassword ? "text" : "password"}
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
        </Box>
        <Box>
          <Box>
            <Box>
              <Button
                onClick={() => handleLogin()}
                variant="contained"
                fullWidth
                sx={{ padding: "12px" }}
              >
                Войти
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
                onClick={() => navigation("/sign-up", { replace: false })}
                fullWidth
                variant="outlined"
                sx={{
                  textTransform: "none",
                  padding: "12px",
                }}
              >
                Зарегистрироваться
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SignIn;
