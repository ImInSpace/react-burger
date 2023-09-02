import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor({ data }) {
  return (
    <div className={styles.scrollContainer + " mt-25 custom-scroll"}>
      {data.data?.map((details, index, arr) => {
        if (index === 0) {
          return (
            <ConstructorRow
              showDragIcon={false}
              key={"constructor_row_" + details._id}
            >
              <ConstructorElement
                type="top"
                text={details.name + " (верх)"}
                price={details.price}
                thumbnail={details.image}
              />
            </ConstructorRow>
          );
        } else if (index === arr.length - 1) {
          return (
            <ConstructorRow
              showDragIcon={false}
              key={"constructor_row_" + details._id}
            >
              <ConstructorElement
                type="bottom"
                text={details.name + " (низ)"}
                price={details.price}
                thumbnail={details.image}
              />
            </ConstructorRow>
          );
        } else {
          return (
            <ConstructorRow
              showDragIcon={true}
              key={"constructor_row_" + details._id}
            >
              <ConstructorElement
                text={details.name}
                price={details.price}
                thumbnail={details.image}
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
