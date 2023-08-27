import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./tabs.module.css";

function Tabs(props) {
  const [current, setCurrent] = useState("Булки");
  const { ingredients } = props;
  return (
    <div style={{ display: "flex" }}>
      {ingredients.map((ingredient, index) => {
        return (
          <>
            <Tab
              value={ingredient}
              active={current === ingredient}
              onClick={setCurrent}
            >
              <a className={styles.link} href="#mains-anchor">
                {ingredient}
              </a>
            </Tab>
          </>
        );
      })}
    </div>
  );
}

export { Tabs };
