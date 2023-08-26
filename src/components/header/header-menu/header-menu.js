import { MenuItem } from "../menu-item/menu-item";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header-menu.module.css";

function HeaderMenu() {
  return (
    <div className={styles.menu}>
      <MenuItem text="Конструктор" icon={<BurgerIcon />} />
      <MenuItem text="Лента заказов" icon={<ListIcon />} />
    </div>
  );
}

export { HeaderMenu };
// ToDo: Добавить PropTypes.
