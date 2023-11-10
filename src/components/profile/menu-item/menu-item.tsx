import styles from "./menu-item.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";

interface IMenuItemProps {
  link: string;
  isActive: boolean;
  caption: string;
  onClickHandler: () => void;
}

function MenuItem(props: IMenuItemProps) {
  const { link, isActive, caption, onClickHandler } = props;

  return (
    <div className={styles.menuCell} onClick={onClickHandler}>
      <Link to={link} className={styles.link}>
        <p
          className={cn(
            "text text_type_main-medium ",
            isActive ? "" : "text_color_inactive"
          )}
        >
          {caption}
        </p>
      </Link>
    </div>
  );
}

export { MenuItem };
