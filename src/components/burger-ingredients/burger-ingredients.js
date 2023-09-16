import { Tabs } from "./tabs/tabs";
import styles from "./burger-ingredients.module.css";
import { GroupedIngredients } from "./grouped-ingredients/grouped-ingredients";
import * as Constants from "../../constants";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

function BurgerIngredients() {
  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const groupType = {
    bun: "bun",
    sauce: "sauce",
    main: "main",
  };

  // ToDo: Добавить useMemo() хук.
  const buns = ingredients?.filter((element) => element.type === groupType.bun);
  const sauces = ingredients?.filter((element) => element.type === groupType.sauce); // prettier-ignore
  const mains = ingredients?.filter((element) => element.type === groupType.main); // prettier-ignore

  const tabsRef = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    console.log(
      "tab position (y): ",
      tabsRef.current.getBoundingClientRect().y
    );
  });

  const scrollHandler = () => {
    const delta =
      hiddenRef.current.getBoundingClientRect().y -
      tabsRef.current.getBoundingClientRect().y;

    if (delta < 0) {
      setCurrent("Соусы");
    }
    console.log(hiddenRef.current.getBoundingClientRect().y);
  };

  const [current, setCurrent] = useState("Булки");

  return (
    <div>
      {/* prettier-ignore */}
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <Tabs current={current} setCurrent={setCurrent} />
      <div
        className={styles.scrollContainer + " custom-scroll mb-10"}
        onScroll={scrollHandler}
        ref={tabsRef}
      >
        <GroupedIngredients
          ingredients={buns}
          groupName={Constants.BUNS_GROUP_NAME}
          anchor={Constants.BUNS_ANCHOR}
        />
        <div ref={hiddenRef}></div>
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

BurgerIngredients.propTypes = {
  handler: PropTypes.func,
};

export { BurgerIngredients };
