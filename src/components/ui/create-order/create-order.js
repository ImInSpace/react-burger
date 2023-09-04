import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./create-order.module.css";
import { Price } from "../../common/price/price";
import PropTypes from "prop-types";

function CreateOrder(props) {
  const { clickHandler } = props;
  return (
    <>
      <div className={styles.container + " mt-5 mr-4"}>
        <div className="mr-5">
          <Price price={710} textSize="medium" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={clickHandler}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
}

CreateOrder.propTypes = {
  clickHandler: PropTypes.func,
};

export { CreateOrder };
