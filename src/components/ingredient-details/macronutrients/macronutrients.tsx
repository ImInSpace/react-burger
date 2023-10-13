import { Macronutrient } from "../macronutrient/macronutrient";
import styles from "./macronutrients.module.css";

interface IMacronutrientsProps {
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
}

function Macronutrients({
  calories,
  proteins,
  fat,
  carbohydrates,
}: IMacronutrientsProps): JSX.Element {
  return (
    <div className={styles.macronutrients + " mt-8 mb-10"}>
      <Macronutrient title="Калории,ккал" value={calories} />
      <Macronutrient title="Белки, г" value={proteins} />
      <Macronutrient title="Жиры, г" value={fat} />
      <Macronutrient title="Углеводы, г" value={carbohydrates} />
    </div>
  );
}
export { Macronutrients };
