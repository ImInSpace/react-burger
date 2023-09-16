import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./tabs.module.css";

function Tabs() {
  const [current, setCurrent] = useState("Булки");
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

export { Tabs };
