import { useState } from "react";

type FormDefaultValue<T> = {
  [t in keyof T]: string;
};

export const useFormInput = <T>(defaultValue: FormDefaultValue<T>) => {
  const [formData, setFormData] = useState(defaultValue);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const clear = () => {
    setFormData(defaultValue)
  }
  return {formData, onChange, clear}
};
