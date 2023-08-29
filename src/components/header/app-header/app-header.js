import styles from "./app-header.module.css";
import { MenuItem } from "../menu-item/menu-item";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftMenu}>
          <MenuItem text="Конструктор" url={"#"} icon={<BurgerIcon />} />
          <MenuItem text="Лента заказов" url={"#"} icon={<ListIcon />} />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.btn}>
          <MenuItem text="Личный кабинет" url={"#"} icon={<ProfileIcon />} />
        </div>
      </div>
    </div>
  );
}

export { AppHeader };
