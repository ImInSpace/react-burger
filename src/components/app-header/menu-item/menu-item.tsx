import styles from "./menu-item.module.css";
import { NavLink } from "react-router-dom";

interface IMenuItem {
  text: string;
  icon: JSX.Element;
  url: string;
}

function MenuItem({ text, icon, url }: IMenuItem): JSX.Element {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        styles.container +
        (isActive
          ? " text text_type_main-default " + styles.active
          : " text text_type_main-default text_color_inactive ")
      }
    >
      {icon}
      {text}
    </NavLink>
  );
}

export { MenuItem };
