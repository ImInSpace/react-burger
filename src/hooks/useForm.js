import { useState } from "react";

export function useForm(inputValues = {}) {
  const [input, setValues] = useState(inputValues);

  const setInput = (name, value) => {
    setValues({ ...input, [name]: value });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput(name, value);
  };

  return { input, setInput, handleChange };
}
