import { IngredientDetails } from "../../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";
import { useNavigate } from "react-router";

export default function IngredientModal(): JSX.Element {
  const navigate = useNavigate();

  const onClose = () => {
    navigate(-1);
  };

  return (
    <Modal caption="Детали ингредиента" closeHandler={onClose}>
      <IngredientDetails />
    </Modal>
  );
}
