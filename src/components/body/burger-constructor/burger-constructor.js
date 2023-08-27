import { ApiData } from "../../../utils/data";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor() {
  return <ContrustorSection ingredient={ApiData} />;
}

function ContrustorSection(props) {
  return (
    <div className="mt-25">
      {ApiData.map((data, index, arr) => {
        console.log();
        if (index === 0) {
          return (
            <ConstructorRow showDragIcon={false}>
              <ConstructorElement
                type="top"
                text={data.name}
                price={data.price}
                thumbnail={data.image}
              />
            </ConstructorRow>
          );
        } else if (index === arr.length - 1) {
          return (
            <ConstructorRow showDragIcon={false}>
              <ConstructorElement
                type="bottom"
                text={data.name}
                price={data.price}
                thumbnail={data.image}
              />
            </ConstructorRow>
          );
        } else {
          return (
            <ConstructorRow showDragIcon={true}>
              <ConstructorElement
                text={data.name}
                price={data.price}
                thumbnail={data.image}
              />
            </ConstructorRow>
          );
        }
      })}
    </div>
  );
}

function ConstructorRow({ children, showDragIcon }) {
  return (
    <div className={styles.row + " mt-4"}>
      <div className="icon">{showDragIcon && <DragIcon />}</div>
      {children}
    </div>
  );
}

export { BurgerConstructor };
