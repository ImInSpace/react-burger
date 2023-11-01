import { Modal } from "../modal/modal";
import { useDispatch } from "react-redux";
import { CreateOrder } from "../../create-order/create-order";
import { closeModalAction } from "../../../services/actions/modal";

export default function OrderModal(): JSX.Element {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeModalAction());
  };

  return (
    <Modal caption="" closeHandler={onClose}>
      <CreateOrder />
    </Modal>
  );
}
