import * as yup from 'yup';

const useFormValidation = () => {
  const rules = {
    user: {
      firstName: yup.string().required().min(3),
      lastName: yup.string().required().min(3),
      userName: yup.string().required(),
      email: yup.string().email().required(),
    },
  };
  const validate = async (
    data: Record<string, any>,
    shape: Record<string, any>
  ) => {
    return await yup.object().shape(shape).validate(data);
  };
  return {
    rules,
    validate,
  };
};

export default useFormValidation;
