import styles from "./macronutrient.module.css";

interface IMacronutrientProps {
  title: string;
  value: number;
}

function Macronutrient({ title, value }: IMacronutrientProps): JSX.Element {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-default text_color_inactive">{title}</p>
      <p className="text text_type_digits-default text_color_inactive">
        {value}
      </p>
    </div>
  );
}

export { Macronutrient };
