import PropTypes from "prop-types";
import { ApiData } from "../../utils/data";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor() {
  return <ContrustorSection ingredient={ApiData} />;
}

function ContrustorSection() {
  return (
    <div className={styles.scrollContainer + " mt-25 custom-scroll"}>
      {ApiData.map((data, index, arr) => {
        if (index === 0) {
          return (
            <ConstructorRow
              showDragIcon={false}
              key={"constructor_row_" + data._id}
            >
              <ConstructorElement
                type="top"
                text={data.name + " (верх)"}
                price={data.price}
                thumbnail={data.image}
              />
            </ConstructorRow>
          );
        } else if (index === arr.length - 1) {
          return (
            <ConstructorRow
              showDragIcon={false}
              key={"constructor_row_" + data._id}
            >
              <ConstructorElement
                type="bottom"
                text={data.name + " (низ)"}
                price={data.price}
                thumbnail={data.image}
              />
            </ConstructorRow>
          );
        } else {
          return (
            <ConstructorRow
              showDragIcon={true}
              key={"constructor_row_" + data._id}
            >
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

ConstructorRow.propTypes = {
  children: PropTypes.element,
  showDragIcon: PropTypes.bool,
};

export { BurgerConstructor };
