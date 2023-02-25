import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required('username is required'),
  password: yup
    .string()
    .min(5, ({min}) => `minimum 5 characters please`)
    .required('invalid password'),
  reason: yup.string().required('username is required'),
});

export const verifyUrlValidation = yup.object().shape({
  agencyUrl: yup.string().required('Agency Url is required'),
});

export const verifyAgencyCodeValidation = yup.object().shape({
  agencyCode: yup.string().required('Agency Url is required'),
});

export const searchPersomValidationSchema = yup.object().shape({
  fName: yup
    .string()
    .required('First name is required')
    .min(2, ({min}) => `minimum 2 characters please`),
  lName: yup
    .string()
    .required('Last name is required')
    .min(2, ({min}) => `minimum 2 characters please`),
  dob: yup.string().required('Date of Birth is required'),
});
