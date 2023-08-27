import PropTypes from "prop-types";
import styles from "./menu-item.module.css";

function MenuItem(props) {
  const { text, icon } = props;
  return (
    <div className={styles.container}>
      {icon}
      <p
        className="text text_type_main-default"
        style={{ display: "inline-block" }}
      >
        {text}
      </p>
    </div>
  );
}

export { MenuItem };

MenuItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element.isRequired,
};
