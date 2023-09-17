import { ingredientDataShape } from "../../../utils/prop-types";
import { ConstructorRow } from "../constructor-row/constructor-row";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../../services/actions/ingredients";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./ingredient.module.css";

function Ingredient({ ingredientInfo, index }) {
  const dispatch = useDispatch();
  const draggableRowRef = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "ingredient",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!draggableRowRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect =
        draggableRowRef.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      //moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "ingredient",
    item: () => {
      return { id: ingredientInfo._id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(draggableRowRef));

  return (
    <div ref={draggableRowRef} draggable className={styles.dragPointer}>
      <ConstructorRow showDragIcon={true}>
        <ConstructorElement
          text={ingredientInfo.name}
          price={ingredientInfo.price}
          thumbnail={ingredientInfo.image}
          handleClose={() =>
            dispatch({ type: REMOVE_INGREDIENT, id: ingredientInfo._id })
          }
        />
      </ConstructorRow>
    </div>
  );
}

Ingredient.propTypes = {
  ingredientInfo: ingredientDataShape.isRequired,
  index: PropTypes.number.isRequired,
};

export { Ingredient };
