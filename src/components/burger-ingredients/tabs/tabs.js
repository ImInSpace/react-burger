import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";
import PropTypes from "prop-types";

function Tabs({ current, setCurrent }) {
  return (
    <div style={{ display: "flex" }}>
      <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
        <a className={styles.link} href="#buns-anchor">
          Булки
        </a>
      </Tab>
      <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
        <a className={styles.link} href="#sauces-anchor">
          Соусы
        </a>
      </Tab>
      <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
        <a className={styles.link} href="#mains-anchor">
          Начинки
        </a>
      </Tab>
    </div>
  );
}

Tabs.propTypes = {
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export { Tabs };
