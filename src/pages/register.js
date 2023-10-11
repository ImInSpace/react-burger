import styles from "./register.module.css";
import cn from "classnames";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerAction } from "../services/actions/register";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const nameInputRef = useRef(null);

  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);

  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();

    const registrationData = {
      email: email,
      password: password,
      name: name,
    };
    dispatch(registerAction(registrationData, navigate));
  };

  return (
    <>
      <div className={styles.root}>
        <form className={styles.container} onSubmit={registerUser}>
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
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={"password"}
            extraClass="mt-6"
          />
          <div className={styles.loginButton}>
            <Button htmlType="submit" type="primary" size="medium">
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
        </form>
      </div>
    </>
  );
}
