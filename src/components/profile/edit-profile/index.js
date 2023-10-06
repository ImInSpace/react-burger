import { useState, useRef, useEffect, useCallback } from "react";
import {
  Button,
  Input,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./edit-profile.module.css";
import { getUser } from "../../../utils/api";
import { getCookie } from "../../../services/cookieManager";

function EditProfile() {
  const [name, setName] = useState("");
  const nameInputRef = useRef(null);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("Введите новый пароль");

  const token = getCookie("token");
  useEffect(() => {
    if (!token) return;

    getUser(token).then((data) => {
      setName(data.user.name);
      setEmail(data.user.email);
    });
  }, [token]);

  return (
    <div className={styles.inputs}>
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
        extraClass="ml-1"
      />
      <EmailInput
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name={"email"}
        placeholder="Почта"
        isIcon={true}
        extraClass="ml-1"
      />
      <PasswordInput
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name={"password"}
        icon="EditIcon"
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={styles.saveBtn}
      >
        Сохранить
      </Button>
    </div>
  );
}

export { EditProfile };
