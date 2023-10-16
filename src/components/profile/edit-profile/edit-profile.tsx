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
import { useForm } from "../../../hooks/useForm";
import { IPatchForm } from "../../../utils/api-shape";

function EditProfile() {
  // @ts-ignore
  const savedUserName = useSelector<string>((store) => store.auth.name);
  // @ts-ignore
  const savedEmail = useSelector((store) => store.auth.email);

  const [isSaveButtonsShown, setIsSaveButtonsShown] = useState(false);

  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    getUser().then((response) => {
      setValues({
        ...values,
        name: response!.user.name,
        email: response!.user.email,
      });
    });
  }, []);

  const updateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const patchObj: IPatchForm = {
      name: values["name"],
      email: values["email"],
    };

    if (values["password"] !== "") {
      patchObj["password"] = values["password"];
    }

    patchUser(patchObj);
    setIsSaveButtonsShown(false);
  };

  const cancelChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      name: savedUserName,
      email: savedEmail,
      password: "",
    });
  };

  const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setIsSaveButtonsShown(true);
  };

  return (
    <form className={styles.inputs} onSubmit={updateUser}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={onInputChanged}
        value={values["name"]}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="ml-1"
      />
      <EmailInput
        onChange={onInputChanged}
        value={values["email"]}
        name={"email"}
        placeholder="Почта"
        isIcon={true}
        extraClass="ml-1"
      />
      <PasswordInput
        onChange={onInputChanged}
        value={values["password"]}
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
            onClick={(e) => cancelChanges}
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
