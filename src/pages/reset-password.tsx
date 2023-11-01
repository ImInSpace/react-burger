import styles from "./reset-password.module.css";
import cn from "classnames";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef, SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPasswordThunk } from "../services/actions/reset-password";
import { IResetPasswordForm } from "../utils/api-shape";

export default function ResetPasswordPage(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>("");

  const [codeFromEmail, setCodeFromEmail] = useState<string>("");
  const codeFromEmailInputRef = useRef(null);

  const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resetPasswordForm: IResetPasswordForm = {
      password: password,
      token: codeFromEmail,
    };

    // @ts-ignore
    dispatch(resetPasswordThunk(resetPasswordForm, navigate));
  };

  return (
    <>
      <div className={styles.root}>
        <form className={styles.container} onSubmit={resetPassword}>
          {/* prettier-ignore */}
          <p className="text text_type_main-medium">Восстановление пароля</p>
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={"password"}
            extraClass="mt-6"
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setCodeFromEmail(e.target.value)}
            value={codeFromEmail}
            name={"email"}
            error={false}
            ref={codeFromEmailInputRef}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mt-6"
          />
          <div className={styles.loginButton}>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
          <div className={cn(styles.registrationContainer, "mt-28")}>
            {/* prettier-ignore */}
            <span className={cn("text text_type_main-default", styles.gray)}>Вспомнили пароль?</span>
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
