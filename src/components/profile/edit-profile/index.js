import { useState, useEffect, useCallback } from "react";
import {
  Button,
  Input,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./edit-profile.module.css";
import { getUser } from "../../../utils/api";

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("Введите новый пароль");

  useEffect(() => {
    getUser().then((userInfo) => {
      console.log("user info успешно загружен: ", userInfo);
      // setName(userInfo.user.name);
      // setEmail(userInfo.user.email);
    });
  });

  return (
    <div className={styles.inputs}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={(e) => setName(e.target.value)}
        value={name}
        name={"name"}
        error={false}
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
