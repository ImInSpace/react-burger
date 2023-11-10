import { Modal } from "../modal/modal";
import { useDispatch } from "react-redux";
import { CreateOrder } from "../../create-order/create-order";
import { closeOrderModalAction } from "../../../services/actions/order";

export default function OrderModal(): JSX.Element {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeOrderModalAction());
  };

  return (
    <Modal caption="" closeHandler={onClose}>
      <CreateOrder />
    </Modal>
  );
}
