import styles from "./order-number.module.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CreateOrderContext } from "../../../context/create-order-context";

function OrderNumber() {
  const { orderNumber } = useContext(CreateOrderContext);

  return (
    <>
      <p className={styles.orderNumber + " text text_type_digits-large mt-20"}>
        {orderNumber}
      </p>
      <p className="text text_type_main-medium mt-8">Идентификатор заказа</p>
    </>
  );
}

OrderNumber.propTypes = {
  number: PropTypes.number,
};

export { OrderNumber };
