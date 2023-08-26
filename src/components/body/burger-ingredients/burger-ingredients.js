import { Tabs } from "../tabs/tabs";

function BurgerIngredients() {
  const titles = ["Булки", "Соусы", "Начинки"];
  return <Tabs ingredients={titles} />;
}

export { BurgerIngredients };
