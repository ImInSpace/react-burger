import { OrderDetails } from "../../order-details/order-details";
import { Modal } from "../modal/modal";
import { useNavigate } from "react-router";

export default function FeedModal(): JSX.Element {
  const navigate = useNavigate();

  const onClose = () => {
    navigate(-1);
  };

  return (
    <Modal caption="Информация о заказе" closeHandler={onClose}>
      <OrderDetails />
    </Modal>
  );
}
