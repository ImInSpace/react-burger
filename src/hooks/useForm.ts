import { useState } from "react";

export function useForm(inputValues = {}) {
  const [values, setValues] = useState<any>(inputValues);

  const handleChange = (event: React.SyntheticEvent) => {
    const { value, name } = event.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
