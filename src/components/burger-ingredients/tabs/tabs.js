import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import PropTypes from "prop-types";

function Tabs({ current, onTabClickHandler }) {
  return (
    <div style={{ display: "flex" }}>
      <Tab
        value="Булки"
        active={current === "Булки"}
        onClick={onTabClickHandler}
      >
        <a className={styles.link} href="#buns-anchor">
          Булки
        </a>
      </Tab>
      <Tab
        value="Соусы"
        active={current === "Соусы"}
        onClick={onTabClickHandler}
      >
        <a className={styles.link} href="#sauces-anchor">
          Соусы
        </a>
      </Tab>
      <Tab
        value="Начинки"
        active={current === "Начинки"}
        onClick={onTabClickHandler}
      >
        <a className={styles.link} href="#mains-anchor">
          Начинки
        </a>
      </Tab>
    </div>
  );
}

Tabs.propTypes = {
  current: PropTypes.string.isRequired,
  onTabClickHandler: PropTypes.func.isRequired,
};

export { Tabs };
