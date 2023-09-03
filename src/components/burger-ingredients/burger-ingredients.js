import { Tabs } from "./tabs/tabs";
import styles from "./burger-ingredients.module.css";
import { GroupedIngredients } from "./grouped-ingredients/grouped-ingredients";
import * as Constants from "../../constants";
import PropTypes from "prop-types";
import { ingredientDataShape } from "../../utils/prop-types";

function BurgerIngredients({ data, handler }) {
  const groupType = {
    bun: "bun",
    sauce: "sauce",
    main: "main",
  };

  const buns = data?.filter((element) => element.type === groupType.bun);
  const sauces = data?.filter((element) => element.type === groupType.sauce); // prettier-ignore
  const mains = data?.filter((element) => element.type === groupType.main);

  return (
    <div>
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <Tabs />
      <div className={styles.scrollContainer + " custom-scroll mb-10"}>
        <GroupedIngredients
          ingredients={buns}
          groupName={Constants.BUNS_GROUP_NAME}
          anchor={Constants.BUNS_ANCHOR}
          handler={handler}
        />
        <GroupedIngredients
          ingredients={sauces}
          groupName={Constants.SAUCES_GROUP_NAME}
          anchor={Constants.SAUCES_ANCHOR}
          handler={handler}
        />
        <GroupedIngredients
          ingredients={mains}
          groupName={Constants.MAINS_GROUP_NAME}
          anchor={Constants.MAINS_ANCHOR}
          handler={handler}
        />
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientDataShape),
  handler: PropTypes.func,
};

export { BurgerIngredients };
