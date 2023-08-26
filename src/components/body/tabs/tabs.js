import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

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
              {ingredient}
            </Tab>
          </>
        );
      })}
    </div>
  );
}

export { Tabs };
