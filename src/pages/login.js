import styles from "./login.module.css";
import {
  Input,
  Button,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { AppHeader } from "../components/app-header/app-header";
import { useDispatch } from "react-redux";
import { loginActionGen } from "../services/actions/login";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const onLoginHandler = () => {
    const loginForm = {
      email: email,
      password: password,
    };

    dispatch(loginActionGen(loginForm, navigate));
  };

  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.container}>
          {/* prettier-ignore */}
          <p className="text text_type_main-medium">Вход</p>
          <EmailInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={"email"}
            isIcon={false}
            extraClass="mt-6"
          />
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={"password"}
            extraClass="mt-6"
          />
          <div className={styles.loginButton}>
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={onLoginHandler}
            >
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
