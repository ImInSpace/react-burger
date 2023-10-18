import { Price } from "../common/price/price";
import { IngredientPrice } from "./ingredient-price/ingredient-price";
import styles from "./order-details.module.css";

function OrderDetails() {
  return (
    <div className={styles.container}>
      <p className={"text text_type_digits-default " + styles.number}>
        #034533
      </p>
      <p className="text text_type_main-medium mt-10">
        Black Hole Singularity острый бургер
      </p>
      <p className={"text text_type_main-small mt-10 " + styles.status}>
        Выполнен
      </p>
      <p className="text text_type_main-medium mt-15">Состав:</p>
      <div className={"mt-6 " + styles.ingredients}>
        <IngredientPrice
          icon=""
          ingredientName="Флюоресцентная булка R2-D3"
          price={200}
          quantity={2}
        />
        <IngredientPrice
          icon=""
          ingredientName="Флюоресцентная булка R2-D3"
          price={200}
          quantity={2}
        />
        <IngredientPrice
          icon=""
          ingredientName="Флюоресцентная булка R2-D3"
          price={200}
          quantity={2}
        />
        <IngredientPrice
          icon=""
          ingredientName="Флюоресцентная булка R2-D3"
          price={200}
          quantity={2}
        />
      </div>
      <div className={"mt-10 " + styles.footer}>
        <p className="text text_type_main-default text_color_inactive">
          Вчера, 13:50
        </p>
        <div>
          <Price price={510} textSize="medium" />
        </div>
      </div>
    </div>
  );
}

export { OrderDetails };
