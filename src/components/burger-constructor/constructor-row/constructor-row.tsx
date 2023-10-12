import styles from "./constructor-row.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React, { FC } from "react";

interface IConstructorRowProps {
  showDragIcon: boolean;
}

const ConstructorRow: React.FC<IConstructorRowProps> = ({
  showDragIcon,
  children,
}) => {
  return (
    <div className={styles.row + " mt-4"}>
      <div className="icon">{showDragIcon && <DragIcon />}</div>
      {children}
    </div>
  );
};

type TButtonProps = {
  primary?: boolean;
  secondary?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButtonProps> = ({ primary, secondary, children, ...props }) => {
  return (
    <button {...props} className={primary ? styles.primary : styles.secondary}>
      {children}
    </button>
  );
};

ConstructorRow.propTypes = {
  children: PropTypes.element,
  showDragIcon: PropTypes.bool,
};

export { ConstructorRow };
