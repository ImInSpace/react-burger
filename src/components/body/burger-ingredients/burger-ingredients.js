import { Ingredient } from "../ingredient/ingredient";
import { Tabs } from "../tabs/tabs";
import styles from "./burger-ingredients.module.css";
import { ApiData } from "../../../utils/data";

function BurgerIngredients() {
  const buns = ApiData.filter((element) => element.type === "bun");
  const sauces = ApiData.filter((element) => element.type === "sauce");
  const mains = ApiData.filter((element) => element.type === "main");

  return (
    <div>
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <Tabs />

      <div className={styles.scrollContainer + " custom-scroll mb-10"}>
        <p id="buns-anchor" className="text text_type_main-medium mt-10">
          Булки
        </p>
        <GroupedIngredients ingredients={buns} />

        <p id="sauces-anchor" className="text text_type_main-medium mt-10">
          Соусы
        </p>
        <GroupedIngredients ingredients={sauces} />

        <p id="mains-anchor" className="text text_type_main-medium mt-10">
          Начинки
        </p>
        <GroupedIngredients ingredients={mains} />
      </div>
    </div>
  );
}

function GroupedIngredients(props) {
  return (
    <>
      <div className={styles.table}>
        {props.ingredients.map((ingredient) => {
          console.log(ingredient);
          return (
            <Ingredient
              price={ingredient.price}
              image={ingredient.image}
              name={ingredient.name}
              count={1}
            />
          );
        })}
      </div>
    </>
  );
}

export { BurgerIngredients };
