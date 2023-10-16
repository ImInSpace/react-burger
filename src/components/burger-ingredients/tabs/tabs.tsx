import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./tabs.module.css";

interface ITabsProps {
  current: string;
  onTabClickHandler: (value: string) => void;
}

function Tabs({ current, onTabClickHandler }: ITabsProps): JSX.Element {
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

export { Tabs };
