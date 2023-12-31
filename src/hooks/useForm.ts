import { useState } from "react";

export function useForm(inputValues = {}) {
  const [values, setValues] = useState<any>(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
