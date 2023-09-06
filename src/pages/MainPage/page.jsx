import React from 'react'

import {Button} from "react-bootstrap";

import styles from "./MainPage.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

import logo from "../../images/logo.png"
import mainPage from "../../images/mainPage.png"

const Page = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.logoImage}>
                    <img
                        src={logo}
                        alt="Logo"
                    />
                </div>

                <div className={styles.infoText}>
                    Регистрируйтесь и проходите
                    тестовые задания для получения
                    должности инженера-проектировщика!
                </div>

                <div className={styles.buttons}>
                    <a>
                        <Button className={styles.regButton} variant="danger">Регистрация</Button>
                    </a>
                    <a>
                        <Button className={styles.loginButton} variant="danger">Войти</Button>
                    </a>
                </div>
            </div>
            <div>
                <img
                    src={mainPage}
                    alt="screen"
                    width={900}
                />
            </div>
        </div>
    )
}

export default Page;