
type FieldToValidate<T = any> = {
  type: string;
  value: T;
};

export const useFormValidation = () => {
  const validate = <T>(fields: FieldToValidate<T>[]): string[] => {
    const allErrors: string[] = [];

    fields.forEach(({ type, value }) => {
      switch (type) {
        case "phone": {
          const trimmed = String(value).trim();
          const isValid = /^09\d{9}$/.test(trimmed);
          if (!isValid) {
            allErrors.push("شماره موبایل باید با 09 شروع شده و 11 رقم باشد.");
          }
          break;
        }
        // Add more validation cases here...

        default:
          break;
      }
    });
    return allErrors;
  };

  return {
    validate,
  };
};
