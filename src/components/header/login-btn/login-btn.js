import { MenuItem } from "../menu-item/menu-item";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-btn.module.css";

function LoginBtn() {
  return (
    <div className={styles.btn}>
      <MenuItem text="Личный кабинет" url={"#"} icon={<ProfileIcon />} />
    </div>
  );
}

export { LoginBtn };
