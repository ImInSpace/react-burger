import { Ingredient } from "../ingredient/ingredient";
import { Tabs } from "../tabs/tabs";

function BurgerIngredients() {
  const titles = ["Булки", "Соусы", "Начинки"];
  return (
    <div>
      <Tabs ingredients={titles} />
      <div className="mt-20">
        <Ingredient
          cost={20}
          image="https://code.s3.yandex.net/react/code/bun-02.png"
          description="Волшебная булочка"
        />
      </div>
    </div>
  );
}

export { BurgerIngredients };
