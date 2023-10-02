import styles from "./login.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { AppHeader } from "../components/app-header/app-header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);
  const onIconEmailClick = () => {
    setTimeout(() => emailInputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  const [password, setPassword] = useState("");
  const passwordInputRef = useRef(null);
  const onIconPasswordClick = () => {
    setTimeout(() => passwordInputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.container}>
          {/* prettier-ignore */}
          <p className="text text_type_main-medium">Вход</p>
          <Input
            type={"email"}
            placeholder={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={"email"}
            error={false}
            ref={emailInputRef}
            onIconClick={onIconEmailClick}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mt-6"
          />
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={(e) => setPassword(e.target.value)}
            icon={"HideIcon"}
            value={password}
            name={"password"}
            error={false}
            ref={passwordInputRef}
            onIconClick={onIconPasswordClick}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mt-6"
          />
          <div className={styles.loginButton}>
            <Button htmlType="button" type="primary" size="medium">
              Войти
            </Button>
          </div>
          <div className={cn(styles.registrationContainer, "mt-28")}>
            {/* prettier-ignore */}
            <span className={cn("text text_type_main-default", styles.gray)}>
            Вы - новый пользователь?
          </span>
            <Link to="/register" className={styles.link}>
              {/* prettier-ignore */}
              <span className={cn("text text_type_main-default", styles.registerLink)}>
              Зарегистрироваться
            </span>
            </Link>
          </div>
          <div className={cn(styles.registrationContainer, "mt-6")}>
            {/* prettier-ignore */}
            <span className={cn("text text_type_main-default", styles.gray)}>Забыли пароль?</span>
            <Link to="/forgot-password" className={styles.link}>
              <span className="text text_type_main-default">
                Восстановить пароль
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
