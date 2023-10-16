interface IIngredientTitleProps {
  text: string;
}

function IngredientTitle({ text }: IIngredientTitleProps): JSX.Element {
  return <p className="text text_type_main-medium mt-4">{text}</p>;
}

export { IngredientTitle };
