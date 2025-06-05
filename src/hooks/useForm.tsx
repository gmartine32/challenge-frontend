import { useState } from "react";

type FormState<T> = {
  form: T;
  handlerForm: (key: keyof T, value: T[keyof T]) => void;
  resetForm: () => void;
};

export const useForm = <T,>(initialState: T): FormState<T> => {
  const [form, setForm] = useState<T>(initialState);

  const handlerForm: FormState<T>["handlerForm"] = (key, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };

  const resetForm = () => setForm(initialState);

  return { form, handlerForm, resetForm };
};
