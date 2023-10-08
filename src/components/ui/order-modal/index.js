import { Modal } from "../modal/modal";
import { useDispatch } from "react-redux";
import { CLOSE_ORDER_MODAL } from "../../../services/actions/order";
import { OrderDetails } from "../../order-details/order-details";

export default function OrderModal() {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({ type: CLOSE_ORDER_MODAL });
  };

  return (
    <Modal closeHandler={onClose}>
      <OrderDetails />
    </Modal>
  );
}
