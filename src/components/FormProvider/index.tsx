"use client";

import { FormProviderProps } from "@/types/FormTypes";
import { useCallback, useState } from "react";
import FormInput from "./FormInput";
import { Button } from "../Button";
import styles from "./FormGroup.module.scss";
import { useFormValidation } from "@/hooks/useFormValidation";
import FormErrorList from "./FormErrorList";

const FormProvider = ({ onSubmit, inputs, buttonLabel , isLoading }: FormProviderProps) => {
  const [errors, setErrors] = useState<string[]>();

  const { validate } = useFormValidation();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      /// validation Logic
      event.preventDefault()

      const form = event.currentTarget; // the <form> element
      const formData = new FormData(form);

      const dataObj = Object.fromEntries(formData.entries());

      const fieldsToValidate = inputs
        .filter((input) => input.validationType)
        .map((input) => ({
          type: input.validationType!,
          value: dataObj[input.name] ?? "",
        }));

      const validateErrors = validate(fieldsToValidate);

      if (validateErrors.length > 0) {
        setErrors(validateErrors);
        return;
      }
      //Submit Form
      onSubmit(formData);
    },
    []
  );

  const handleFormChange = (event: React.ChangeEvent<HTMLFormElement>) => {
  if (errors && errors.length > 0) {
    setErrors([]);  
  }
};

  return (
    <form onSubmit={handleSubmit} onChange={handleFormChange} className={styles.formProvider}>
      {inputs.map((item) => (
        <FormInput
          key={item.id}
          label={item.label}
          name={item.name}
          placeholder={item.placeholder}
          required={item.required ?? false}
          type={item.type}
        />
      ))}
      <FormErrorList errors={errors} />
      <Button type="submit" variant="primary" size="md" fullWidth isLoading={isLoading}>
        {buttonLabel}
      </Button>
    </form>
  );
};

export default FormProvider;
