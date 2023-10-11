import styles from "./menu-item.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cn from "classnames";

function MenuItem(props) {
  const { link, isActive, caption, onClickHandler } = props;

  return (
    <div className={styles.menuCell} onClick={onClickHandler}>
      <Link to={link} className={styles.link}>
        {/* prettier-ignore */}
        <p className={cn("text text_type_main-medium ", isActive ? "" : "text_color_inactive")}>
          {caption}
        </p>
      </Link>
    </div>
  );
}

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export { MenuItem };
