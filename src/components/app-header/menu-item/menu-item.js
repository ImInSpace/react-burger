import PropTypes from "prop-types";
import styles from "./menu-item.module.css";

function MenuItem(props) {
  const { text, icon, url } = props;
  return (
    <div className={styles.container}>
      {icon}
      <a
        href={url}
        className={"text text_type_main-default " + styles.link}
        style={{ display: "inline-block" }}
      >
        {text}
      </a>
    </div>
  );
}

export { MenuItem };

MenuItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element.isRequired,
  url: PropTypes.string,
};
