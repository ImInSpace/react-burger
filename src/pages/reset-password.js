import styles from "./reset-password.module.css";
import cn from "classnames";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPasswordAction } from "../services/actions/reset-password";

export default function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [codeFromEmail, setCodeFromEmail] = useState("");
  const codeFromEmailInputRef = useRef(null);

  const resetPassword = (e) => {
    e.preventDefault();
    dispatch(resetPasswordAction(password, codeFromEmail, navigate));
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
