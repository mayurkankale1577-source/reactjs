import { useState } from "react";

export default function useForm(initialState = {}, callback) {
  const [values, setValues] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (callback) callback(values);
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return { values, handleChange, handleSubmit, resetForm };
}
