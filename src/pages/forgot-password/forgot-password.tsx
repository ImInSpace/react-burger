import styles from "./forgot-password.module.css";
import cn from "classnames";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPasswordThunk } from "../../services/actions/forgot-password";
import { IForgotPasswordRequestBody } from "../../utils/api-shape";

export default function ForgotPasswordPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const emailInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restorePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const forgotPasswordBody: IForgotPasswordRequestBody = {
      email: email,
    };

    dispatch(forgotPasswordThunk(forgotPasswordBody, navigate));
  };

  return (
    <>
      <div className={styles.root}>
        <form className={styles.container} onSubmit={restorePassword}>
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
            <Button htmlType="submit" type="primary" size="medium">
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
        </form>
      </div>
    </>
  );
}
