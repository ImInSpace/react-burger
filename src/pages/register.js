import styles from "./register.module.css";
import { AppHeader } from "../components/app-header/app-header";
import cn from "classnames";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAction } from "../services/actions/register";

export default function RegisterPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const nameInputRef = useRef(null);

  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);

  const [password, setPassword] = useState("");
  const passwordInputRef = useRef(null);
  const onIconPasswordClick = () => {
    setTimeout(() => emailInputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  const onRegisterHandler = () => {
    const registrationData = {
      email: email,
      password: password,
      name: name,
    };
    dispatch(registerAction(registrationData));
  };

  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.container}>
          {/* prettier-ignore */}
          <p className="text text_type_main-medium">Регистрация</p>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            name={"name"}
            error={false}
            ref={nameInputRef}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mt-6"
          />
          <Input
            type={"email"}
            placeholder={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={"email"}
            error={false}
            ref={emailInputRef}
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
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={onRegisterHandler}
            >
              Зарегистрироваться
            </Button>
          </div>
          <div className={cn(styles.registrationContainer, "mt-28")}>
            {/* prettier-ignore */}
            <span className={cn("text text_type_main-default", styles.gray)}>Уже зарегистрированы?</span>
            <Link to="/login" className={styles.link}>
              <span
                className={cn(
                  "text text_type_main-default",
                  styles.registerLink
                )}
              >
                Войти
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
