import { Case, UserInfo } from '../entities-types';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
  SignupName: undefined;
  SignupEmail: { name?: string };
  SignupPhone: { name?: string; email: string };
  SignupCcNo: { name?: string; email: string; phone?: string };
  SignupNoEmployees: {
    name?: string;
    email: string;
    phone?: string;
    ccNo?: string;
  };
  SignupPassword: {
    name?: string;
    email: string;
    phone?: string;
    ccNo?: string;
    noOfEmployees: string;
  };
  ForgetPassword: undefined;
  BottomTab: undefined;
  StatusCases: { title?: string };
  CreateCase: undefined;
  EditCase: { caseDetails: Case };
  CaseDetails: { caseDetails: Case };
  Clients: undefined;
  ProfileSetting: undefined;
  PersonalAssistant: undefined;
  AddPA: undefined;
  Notifications: undefined;
  Reminder: {
    caseDetails: Case
  };
  PaProfileDetails: {
    userDetails: UserInfo
  };
};
export default RootStackParamList;
