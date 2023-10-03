import styles from "./reset-password.module.css";
import { AppHeader } from "../components/app-header/app-header";
import cn from "classnames";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPasswordAction } from "../services/actions/reset-password";

export default function ResetPasswordPage() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const passwordInputRef = useRef(null);
  const onIconPasswordClick = () => {
    setTimeout(() => passwordInputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  const [codeFromEmail, setCodeFromEmail] = useState("");
  const codeFromEmailInputRef = useRef(null);

  const onSaveClickHandler = () => {
    dispatch(resetPasswordAction(password, codeFromEmail));
  };

  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.container}>
          {/* prettier-ignore */}
          <p className="text text_type_main-medium">Восстановление пароля</p>
          <Input
            type={"password"}
            placeholder={"Введите новый пароль"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name={"emailCode"}
            error={false}
            onIconClick={onIconPasswordClick}
            ref={codeFromEmailInputRef}
            errorText={"Ошибка"}
            size={"default"}
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
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={onSaveClickHandler}
            >
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
        </div>
      </div>
    </>
  );
}