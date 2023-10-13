import styles from "./constructor-row.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { ReactNode } from "react";

interface IConstructorRowProps {
  showDragIcon: boolean;
  children?: ReactNode;
}

function ConstructorRow({
  showDragIcon,
  children,
}: IConstructorRowProps): JSX.Element {
  return (
    <div className={styles.row + " mt-4"}>
      <div className="icon">{showDragIcon && <DragIcon type="primary" />}</div>
      {children}
    </div>
  );
}

export { ConstructorRow };
