import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('error_valid_email')
    .required('error_email_req'),
  password: yup
    .string()
    .min(8, ({ min }) => `error_pass_min`)
    .required('error_pass_req'),
});

export const signupNameValidationSchema = yup.object().shape({
  name: yup.string().required('error_name_req'),
});
export const signupEmailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('error_valid_email')
    .required('error_email_req'),
});
export const editProfileValidationSchema = yup.object().shape({
  name: yup.string().required('error_name_req'),
  ccNo: yup.string().min(4).required('error_cvc_req'),
  phone: yup
    .number()
    .typeError("error_valid_phone")
    .positive("error_phone_minus")
    .integer("error_phone_decimal")
    .min(8, 'error_valid_phone')
    .required('error_phone_req'),
});
export const addPAValidationSchema = yup.object().shape({
  name: yup.string().required('error_name_req'),
  email: yup
    .string()
    .email('error_valid_email')
    .required('error_email_req'),
  phone: yup
    .number()
    .typeError("error_valid_phone")
    .positive("error_phone_minus")
    .integer("error_phone_decimal")
    .min(8, 'error_valid_phone')
    .required('error_phone_req'),
  password: yup
    .string()
    .required('error_pass_enter')
    .min(8, 'error_pass_short'),
  re_password: yup
    .string()
    .required('error_pass_retype')
    .oneOf([yup.ref('password')], 'error_pass_not_match'),

});
export const signupPhoneValidationSchema = yup.object().shape({
  phone: yup
    .number()
    .typeError("error_valid_phone")
    .positive("error_phone_minus")
    .integer("error_phone_decimal")
    .min(8, 'error_valid_phone')
    .required('error_phone_req'),
});
export const signupCcNoValidationSchema = yup.object().shape({
  ccNo: yup.string().min(4, 'error_cvc_req').required('error_cvc_req'),
});
export const signupNoOFEmployeesValidationSchema = yup.object().shape({
  noOfEmployees: yup
    .string()
    .min(1)
    .required('error_noemp_req'),
});
export const signupPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required('error_pass_enter')
    .min(8, 'error_pass_short'),
  re_password: yup
    .string()
    .required('error_pass_retype')
    .oneOf([yup.ref('password')], 'error_pass_not_match'),
});
export const createCaseSaveValidationSchema = yup.object().shape({
  caseTitle: yup.string().required('error_title_req'),
  caseNo: yup.string().min(1).required('error_caseno_req'),
  caseStage: yup.string().required('error_casestg_req'),
  beforeBench: yup.string().required('error_bench_req'),
  totalAmount: yup.string()
    .required('error_payment_req'),
  advance: yup.string().required('error_advance_req'),
  comparePayment: yup.string().when(["totalAmount", "advance"], {
    is: (totalAmount: number, Advance: number) => {
      return totalAmount * 1 < Advance * 1;
    },
    then: yup.string().required('error_payment_valid')
  }),
  clientInfo: yup.object().shape({
    clientName: yup.string().min(1).required('error_client_name_req'),
    clientPhone: yup
      .number()
      .typeError("error_valid_phone")
      .positive("error_phone_minus")
      .integer("error_phone_decimal")
      .min(8, 'error_valid_phone')
      .required('error_phone_req'),
  })
});
export const editCaseSaveValidationSchema = yup.object().shape({
  caseTitle: yup.string().required('error_title_req'),
  caseNo: yup.string().min(1).required('error_caseno_req'),
  caseStage: yup.string().required('error_casestg_req'),
  beforeBench: yup.string().required('error_bench_req'),
  totalAmount: yup.string()
    .required('error_payment_req'),
  advance: yup.string().required('error_advance_req'),
  comparePayment: yup.string().when(["totalAmount", "advance"], {
    is: (totalAmount: number, Advance: number) => {
      return totalAmount * 1 < Advance * 1;
    },
    then: yup.string().required('error_payment_valid')
  }),
  clientInfo: yup.object().shape({
    clientName: yup.string().min(1).required('error_client_name_req'),
    clientPhone: yup
      .number()
      .typeError("error_valid_phone")
      .positive("error_phone_minus")
      .integer("error_phone_decimal")
      .min(8, 'error_valid_phone')
      .required('error_phone_req'),
  })
  // firInfo: yup.object().shape({
  //   firDate: yup.string().required('firDate is Required'),
  //   firNo: yup.string().required('firNo is Required'),
  //   noOfAccused: yup.string().required('noOfAccused is Required'),
  //   policeStation: yup.string().required('policeStation is Required'),
  //   underSection: yup.string().required('underSection is Required'),
  //   incident: yup.string().required('incident is Required'),
  // }),
  // disposalInfo: yup.object().shape({
  //   disposedOfStatus: yup.string().required('disposedOfStatus is Required'),
  //   disposalBench: yup.string().required('disposalBench is Required'),
  //   caseDisposalDate: yup.string().required('caseDisposalDate is Required'),
  //   consignedDate: yup.string().required('consignedDate is Required'),
  // })

});

