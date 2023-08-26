import PropTypes from "prop-types";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./nav-menu-item.module.css";

function NavMenuItem(props) {
  const { text } = props;
  return (
    <div className={styles.container}>
      <BurgerIcon type="primary" />
      <p
        className="text text_type_main-default"
        style={{ display: "inline-block" }}
      >
        {text}
      </p>
    </div>
  );
}

export { NavMenuItem };

NavMenuItem.propTypes = {
  text: PropTypes.string,
};
