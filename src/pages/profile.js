import { AppHeader } from "../components/app-header/app-header";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import {
  Input,
  EditIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function Profile() {
  const [name, setName] = useState("Иван");
  const nameInputRef = useRef(null);

  const [login, setLogin] = useState("ivan@stellar.burgers");
  const loginInputRef = useRef(null);

  const [password, setPassword] = useState("******");
  const passwordInputRef = useRef(null);

  return (
    <>
      <AppHeader />
      <div className={styles.root}>
        <div className={styles.container}>
          <div className="menu">
            <div className={styles.menuCell}>
              <Link to="#" className={styles.link}>
                <p className="text text_type_main-medium">Профиль</p>
              </Link>
            </div>
            <div className={styles.menuCell}>
              <Link to="#" className={styles.link}>
                <p className="text text_type_main-medium">История заказов</p>
              </Link>
            </div>
            <div className={styles.menuCell}>
              <Link to="#" className={styles.link}>
                <p className="text text_type_main-medium">Выход</p>
              </Link>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}
