import { IngredientIcon } from "./ingredient-icon/ingredient-icon";
import styles from "./ingredients.module.css";

interface IIngredientsProps {
  iconsUrl: ReadonlyArray<string>;
}

function Ingredients({
  iconsUrl: ingredientIcons,
}: IIngredientsProps): JSX.Element {
  const iconsLimit: number = 5;

  return (
    <div className={styles.container}>
      {ingredientIcons.map((icon, index) => {
        if (index < iconsLimit)
          return <IngredientIcon icon={icon} key={index} />;
        if (index == iconsLimit) {
          return (
            <IngredientIcon
              icon={icon}
              isCounterShown={true}
              number={ingredientIcons.length - index}
            />
          );
        }
      })}
    </div>
  );
}

export { Ingredients };
