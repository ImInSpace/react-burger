import { IIngredientDataShape } from "../../../utils/api-shape";
import { Ingredient } from "../ingredient/ingredient";
import styles from "./grouped-ingredients.module.css";

interface IGroupedIngredientsProps {
  groupName: string;
  ingredients: Array<IIngredientDataShape>;
}

function GroupedIngredients({
  groupName,
  ingredients,
}: IGroupedIngredientsProps): JSX.Element {
  return (
    <>
      <p className="text text_type_main-medium mt-10">{groupName}</p>
      <div className={styles.table}>
        {ingredients?.map((ingredient) => {
          return (
            <Ingredient
              ingredientInfo={ingredient}
              // count={undefined}
              key={ingredient._id}
            />
          );
        })}
      </div>
    </>
  );
}

export { GroupedIngredients };
