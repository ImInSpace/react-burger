import styles from "./ingredient-details.module.css";
import { Macronutrient } from "./macronutrient/macronutrient";
import PropTypes from "prop-types";

function IngredientDetails({ data }) {
  return (
    <div className={styles.container}>
      <IngredientImage img={data.image} />
      <IngredientTitle text={data.name} />
      <Macronutrients {...data} />
    </div>
  );
}

const ingredientDataShape = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
});

IngredientDetails.propTypes = {
  data: ingredientDataShape,
};

function IngredientImage({ img }) {
  return (
    <div className={styles.imageContainer}>
      <img src={img} alt="Изображение ингредиента"></img>
    </div>
  );
}

function IngredientTitle({ text }) {
  return <p className="text text_type_main-medium mt-4">{text}</p>;
}

function Macronutrients({ calories, proteins, fat, carbohydrates }) {
  return (
    <div className={styles.macronutrients + " mt-8 mb-10"}>
      <Macronutrient title="Калории,ккал" value={calories} />
      <Macronutrient title="Белки, г" value={proteins} />
      <Macronutrient title="Жиры, г" value={fat} />
      <Macronutrient title="Углеводы, г" value={carbohydrates} />
    </div>
  );
}

Macronutrients.propTypes = {
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
};

export { IngredientDetails };
