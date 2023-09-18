import { Tabs } from "./tabs/tabs";
import styles from "./burger-ingredients.module.css";
import { GroupedIngredients } from "./grouped-ingredients/grouped-ingredients";
import * as Constants from "../../constants";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useRef, useState, useMemo } from "react";

function BurgerIngredients() {
  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const groupType = {
    bun: "bun",
    sauce: "sauce",
    main: "main",
  };

  const buns = useMemo(() => {
    return ingredients.filter((element) => element.type === groupType.bun);
  }, [ingredients, groupType.bun]);

  const sauces = useMemo(() => {
    return ingredients.filter((element) => element.type === groupType.sauce);
  }, [ingredients, groupType.sauce]);

  const mains = useMemo(() => {
    return ingredients.filter((element) => element.type === groupType.main);
  }, [ingredients, groupType.main]);

  const tabsRef = useRef(null);
  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainsRef = useRef(null);

  const scrollHandler = () => {
    const bunsDelta =
      bunsRef.current.getBoundingClientRect().y -
      tabsRef.current.getBoundingClientRect().y;

    if (bunsDelta > -20 && bunsDelta < 20) {
      setCurrentTab(Constants.BUNS_GROUP_NAME);
      return;
    }

    const mainsDelta =
      mainsRef.current.getBoundingClientRect().y -
      tabsRef.current.getBoundingClientRect().y;

    if (mainsDelta > -20 && mainsDelta < 20) {
      setCurrentTab(Constants.MAINS_GROUP_NAME);
      return;
    }

    const saucesDelta =
      saucesRef.current.getBoundingClientRect().y -
      tabsRef.current.getBoundingClientRect().y;

    if (saucesDelta > -20 && saucesDelta < 20) {
      setCurrentTab(Constants.SAUCES_GROUP_NAME);
      return;
    }
  };

  const [currentTab, setCurrentTab] = useState("Булки");
  const tabClickHandler = (tabTitle) => {
    switch (tabTitle) {
      case Constants.BUNS_GROUP_NAME:
        setCurrentTab(Constants.BUNS_GROUP_NAME);
        bunsRef.current.scrollIntoView();
        break;
      case Constants.SAUCES_GROUP_NAME:
        setCurrentTab(Constants.SAUCES_ANCHOR);
        saucesRef.current.scrollIntoView();
        break;
      case Constants.MAINS_GROUP_NAME:
        setCurrentTab(Constants.MAINS_ANCHOR);
        mainsRef.current.scrollIntoView();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* prettier-ignore */}
      <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
      <Tabs current={currentTab} onTabClickHandler={tabClickHandler} />
      <div
        className={styles.scrollContainer + " custom-scroll mb-10"}
        onScroll={scrollHandler}
        ref={tabsRef}
      >
        <div ref={bunsRef}></div>
        <GroupedIngredients
          ingredients={buns}
          groupName={Constants.BUNS_GROUP_NAME}
        />
        <div ref={saucesRef}></div>
        <GroupedIngredients
          ingredients={sauces}
          groupName={Constants.SAUCES_GROUP_NAME}
        />
        <div ref={mainsRef}></div>
        <GroupedIngredients
          ingredients={mains}
          groupName={Constants.MAINS_GROUP_NAME}
        />
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  handler: PropTypes.func,
};

export { BurgerIngredients };
