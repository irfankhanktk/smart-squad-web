import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('username is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `minimum 8 characters please`)
    .required('invalid password'),
  reason: yup
    .string()
    .required('username is required'),
});
