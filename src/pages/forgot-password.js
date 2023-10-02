import styles from "./forgot-password.module.css";
import { AppHeader } from "../components/app-header/app-header";
import cn from "classnames";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPasswordAction } from "../services/actions/forgot-password";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    dispatch(forgotPasswordAction(email));
  };

  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.container}>
          {/* prettier-ignore */}
          <p className="text text_type_main-medium">Восстановление пароля</p>
          <Input
            type={"email"}
            placeholder={"Укажите e-mail"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={"email"}
            error={false}
            ref={emailInputRef}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mt-6"
          />
          <div className={styles.loginButton}>
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={onClickHandler}
            >
              Восстановить
            </Button>
          </div>
          <div className={cn(styles.registrationContainer, "mt-28")}>
            {/* prettier-ignore */}
            <span className={cn("text text_type_main-default", styles.gray)}>Восстановить пароль?</span>
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
