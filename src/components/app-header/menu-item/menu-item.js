import PropTypes from "prop-types";
import styles from "./menu-item.module.css";
import { NavLink } from "react-router-dom";

function MenuItem(props) {
  const { text, icon, url } = props;

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

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  url: PropTypes.string.isRequired,
};
