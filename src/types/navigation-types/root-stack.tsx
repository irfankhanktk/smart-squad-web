import { Case, UserInfo } from '../entities-types';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  VerifyUrl: undefined;
  Login: undefined;
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
