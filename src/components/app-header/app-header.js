import styles from "./app-header.module.css";
import { MenuItem } from "./menu-item/menu-item";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftMenu}>
          <Link to="/">
            <MenuItem text="Конструктор" icon={<BurgerIcon />} />
          </Link>
          <MenuItem text="Лента заказов" icon={<ListIcon />} />
        </div>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.rightMenu}>
          <Link to="/profile">
            <MenuItem text="Личный кабинет" icon={<ProfileIcon />} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export { AppHeader };
