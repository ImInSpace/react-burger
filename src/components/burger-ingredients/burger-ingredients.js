import { Tabs } from "./tabs/tabs";
import styles from "./burger-ingredients.module.css";
import { ApiData } from "../../utils/data";
import { GroupedIngredients } from "./grouped-ingredients/grouped-ingredients";
import * as Constants from "../../constants";

function BurgerIngredients() {
  const groupType = {
    bun: "bun",
    sauce: "sauce",
    main: "main",
  };

  const buns = ApiData.filter((element) => element.type === groupType.bun); // Булки.
  const sauces = ApiData.filter((element) => element.type === groupType.sauce); // Соусы.
  const mains = ApiData.filter((element) => element.type === groupType.main); // Начинки.

  return (
    <div>
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <Tabs />
      <div className={styles.scrollContainer + " custom-scroll mb-10"}>
        <GroupedIngredients
          ingredients={buns}
          groupName={Constants.BUNS_GROUP_NAME}
          anchor={Constants.BUNS_ANCHOR}
        />
        <GroupedIngredients
          ingredients={sauces}
          groupName={Constants.SAUCES_GROUP_NAME}
          anchor={Constants.SAUCES_ANCHOR}
        />
        <GroupedIngredients
          ingredients={mains}
          groupName={Constants.MAINS_GROUP_NAME}
          anchor={Constants.MAINS_ANCHOR}
        />
      </div>
    </div>
  );
}

export { BurgerIngredients };
