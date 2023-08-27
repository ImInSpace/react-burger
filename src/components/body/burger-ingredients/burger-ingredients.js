import { Ingredient } from "../ingredient/ingredient";
import { Tabs } from "../tabs/tabs";
import styles from "./burger-ingredients.module.css";
import { ApiData } from "../../../utils/data";

function BurgerIngredients() {
  const titles = ["Булки", "Соусы", "Начинки"];

  const buns = ApiData.filter((element) => element.type === "bun");
  const sauces = ApiData.filter((element) => element.type === "sauce");
  const mains = ApiData.filter((element) => element.type === "main");

  console.log("Булки", buns);
  console.log("Соусы", sauces);
  console.log("Соусы", mains);

  return (
    <div style={{ height: "600px" }}>
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <Tabs ingredients={titles} />

      <p className="text text_type_main-medium mt-10">Булки</p>
      <Table ingredients={buns} />
      <p className="text text_type_main-medium mt-10">Соусы</p>
      <Table ingredients={sauces} />
      <p className="text text_type_main-medium mt-10">Начинки</p>
      <Table ingredients={mains} />
    </div>
  );
}

function Table(props) {
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
            />
          );
        })}
      </div>
    </>
  );
}

export { BurgerIngredients };
