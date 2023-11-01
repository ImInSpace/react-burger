import styles from "./login.module.css";
import {
  Button,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/actions/auth";
import { useNavigate } from "react-router-dom";
import { ILoginForm } from "../utils/api-shape";

export default function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginForm: ILoginForm = {
      email: email,
      password: password,
    };

    // @ts-ignore
    dispatch(loginThunk(loginForm, navigate));
  };

  return (
    <div className={styles.root}>
      <form className={styles.container} onSubmit={login}>
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
          <Button htmlType="submit" type="primary" size="medium">
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
      </form>
    </div>
  );
}
