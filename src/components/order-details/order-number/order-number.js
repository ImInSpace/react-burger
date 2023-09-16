import styles from "./order-number.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function OrderNumber() {
  const orderNumber = useSelector((store) => store.order.number);

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
