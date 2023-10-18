import { Modal } from "../modal/modal";
import { useDispatch } from "react-redux";
import { CLOSE_ORDER_MODAL } from "../../../services/actions/order";
import { CreateOrder } from "../../create-order/create-order";

export default function OrderModal(): JSX.Element {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({ type: CLOSE_ORDER_MODAL });
  };

  return (
    <Modal caption="" closeHandler={onClose}>
      <CreateOrder />
    </Modal>
  );
}
