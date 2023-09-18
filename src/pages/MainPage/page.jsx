import React from "react";

import { Button, ThemeProvider } from "@mui/material";

import styles from "./MainPage.module.css";

import logo from "../../images/logo.png";
import mainPage from "../../images/mainPage.png";

import { useNavigate } from "react-router-dom";
import { defaultTheme } from "../../theme";

const MainPage = () => {
  const navigation = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.logoImage}>
            <img src={logo} alt="Logo" />
          </div>

          <div className={styles.infoText}>
            Регистрируйтесь и проходите тестовые задания для получения должности
            инженера-проектировщика!
          </div>

          <div className={styles.buttons}>
            <Button
              onClick={() => navigation("/sign-up", { replace: false })}
              className={styles.regButton}
              variant="contained"
              sx={{
                marginBottom: "20px"
              }}
            >
              Регистрация
            </Button>
            <Button
              onClick={() => navigation("/sign-in", { replace: false })}
              className={styles.loginButton}
              variant="contained"
            >
              Войти
            </Button>
          </div>
        </div>
        <div>
          <img src={mainPage} alt="screen" width={900} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainPage;
