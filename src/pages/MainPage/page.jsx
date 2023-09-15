import React from "react";

import { Button } from "react-bootstrap";

import styles from "./MainPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../images/logo.png";
import mainPage from "../../images/mainPage.png";

import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigation = useNavigate();
  return (
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
            variant="danger"
          >
            Регистрация
          </Button>
          <Button
            onClick={() => navigation("/sign-in", { replace: false })}
            className={styles.loginButton}
            variant="danger"
          >
            Войти
          </Button>
        </div>
      </div>
      <div>
        <img src={mainPage} alt="screen" width={900} />
      </div>
    </div>
  );
};

export default MainPage;
