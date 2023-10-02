import { useState, useRef } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./edit-profile.module.css";

function EditProfile() {
  const [name, setName] = useState("Иван");
  const nameInputRef = useRef(null);

  const [login, setLogin] = useState("ivan@stellar.burgers");
  const loginInputRef = useRef(null);

  const [password, setPassword] = useState("******");
  const passwordInputRef = useRef(null);

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
        onChange={(e) => setLogin(e.target.value)}
        icon={"EditIcon"}
        value={login}
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
        icon={"EditIcon"}
        value={password}
        name={"name"}
        error={false}
        ref={passwordInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
      />
    </div>
  );
}

export { EditProfile };
