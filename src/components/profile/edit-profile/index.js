import { useState, useRef, useEffect, useCallback } from "react";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./edit-profile.module.css";
import { getUser } from "../../../utils/api";
import { getCookie } from "../../../services/cookieManager";

function EditProfile() {
  const [name, setName] = useState("");
  const nameInputRef = useRef(null);

  const [email, setEmail] = useState("");
  const loginInputRef = useRef(null);

  const [password, setPassword] = useState("******");
  const passwordInputRef = useRef(null);

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
        icon={"EditIcon"}
        value={name}
        name={"name"}
        error={false}
        ref={nameInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
      />
      <Input
        type={"text"}
        placeholder={"Email"}
        onChange={(e) => setEmail(e.target.value)}
        icon={"EditIcon"}
        value={email}
        name={"name"}
        error={false}
        ref={loginInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
      />
      <Input
        type={"text"}
        placeholder={"Пароль"}
        onChange={(e) => setPassword(e.target.value)}
        icon={"HideIcon"}
        value={password}
        name={"name"}
        error={false}
        ref={passwordInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
      />
      <Button htmlType="button" type="primary" size="medium" extraClass={styles.saveBtn}>
        Сохранить
      </Button>
    </div>
  );
}

export { EditProfile };
