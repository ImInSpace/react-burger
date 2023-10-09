import { useState, useEffect } from "react";
import {
  Button,
  Input,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./edit-profile.module.css";
import { getUser, patchUser } from "../../../utils/api";
import { useSelector } from "react-redux";

function EditProfile() {
  const savedUserName = useSelector((store) => store.auth.name);
  const savedEmail = useSelector((store) => store.auth.email);

  const [isSaveButtonsShown, setIsSaveButtonsShown] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getUser().then((userInfo) => {
      setName(userInfo.user.name);
      setEmail(userInfo.user.email);
    });
  }, []);

  const updateUser = (e) => {
    e.preventDefault();

    const patchObj = {
      name: name,
      email: email,
    };

    if (password !== "") {
      patchObj["password"] = password;
    }

    patchUser(patchObj);
    setIsSaveButtonsShown(false);
  };

  const cancelChanges = () => {
    setName(savedUserName);
    setEmail(savedEmail);
    setPassword("");
    setIsSaveButtonsShown(false);
  };

  const onNameChanged = (e) => {
    setName(e.target.value);
    setIsSaveButtonsShown(true);
  };

  const onEmailChanged = (e) => {
    setEmail(e.target.value);
    setIsSaveButtonsShown(true);
  };

  const onPasswordChanged = (e) => {
    setPassword(e.target.value);
    setIsSaveButtonsShown(true);
  };

  return (
    <form className={styles.inputs} onSubmit={updateUser}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={onNameChanged}
        value={name}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
      />
      <EmailInput
        onChange={onEmailChanged}
        value={email}
        name={"email"}
        placeholder="Почта"
        isIcon={true}
        extraClass="ml-1"
      />
      <PasswordInput
        onChange={onPasswordChanged}
        value={password}
        name={"password"}
        placeholder="Введите новый пароль"
        icon="EditIcon"
      />
      {isSaveButtonsShown && (
        <div className={styles.buttons}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={cancelChanges}
          >
            Отменить
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass={styles.saveBtn}
          >
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}

export { EditProfile };
