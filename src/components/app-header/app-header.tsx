import styles from "./app-header.module.css";
import { MenuItem } from "./menu-item/menu-item";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import * as Constants from "../../constants";

function AppHeader(): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftMenu}>
          <MenuItem
            url="/"
            text={Constants.HEADER_MENU_CONSTRUCTOR}
            icon={<BurgerIcon type="primary" />}
          />
          <MenuItem
            url="/history"
            text={Constants.HEADER_MENU_ORDER_RIBBON}
            icon={<ListIcon type="primary" />}
          />
        </div>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.rightMenu}>
          <MenuItem
            url="/profile"
            text={Constants.HEADER_MENU_PROFILE}
            icon={<ProfileIcon type="primary" />}
          />
        </div>
      </div>
    </div>
  );
}

export { AppHeader };
