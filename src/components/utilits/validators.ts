export const validateCity = (value: string) => {
  if (!value) return 'Field is required';
  let errorMassage;
  if (/[0-9]/g.test(value)) errorMassage = 'Only letters';
  return errorMassage;
};

export const teamValidate = (value: string) => {
  let errorMassage;
  if (!value) errorMassage = 'Field is required';
  return errorMassage;
};

export const abbreviationValidate = (value: string | null) => {
  let errorMassage;
  if (!value || value.length === 0) errorMassage = 'Field is required';
  return errorMassage;
};
