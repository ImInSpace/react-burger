import styles from "./ingredient-image.module.css";

interface IIngredientImageProps {
  img: string;
}

function IngredientImage({ img }: IIngredientImageProps): JSX.Element {
  return (
    <div className={styles.image}>
      <img src={img} alt="Изображение ингредиента"></img>
    </div>
  );
}

export { IngredientImage };
