import { colors } from '../../config/colors';

export type Theme = {
  dark: boolean;
  colors: typeof colors;
};

export type UserInfo = {
  id?: string;
  userId?: string;
  email: string;
  name?: string;
  phone?: string;
  ccNo?: string;
  noOfEmployees?: any;
  password?: string;
  creatorId?: string;
  status?: string;
  countryCode?: string;
};
export type ClientInfo = {
  countryCode: '+92';
  clientName?: string;
  clientPhone?: string;
}
export type Case = {
  id?: string;
  clientInfo: ClientInfo;
  caseTitle?: string;
  caseId?: string;
  priority?: string;
  firmId?: string;
  caseNo?: string;
  createdAt: string;
  caseStatus?: 'Pending' | 'Decided';
  caseStage?: string;
  shortOrder?: string;
  beforeOrder?: string;
  creatorId?: string;
  hearingDate?: string;
  previousDate?: string;
  lawyerId?: string;
  remainingPayment?: string;
  clientId?: string;
  beforeBench?: string;
  files: File[];
  totalAmount?: any;
  advance?: any;
  disposalInfo: DiposalInfo,
  firInfo: FirInfo,
  comparePayment?: string
};

export type DiposalInfo = {
  disposedOfStatus?: string;
  disposalBench?: string;
  caseDisposalDate?: string;
  consignedDate?: string;
};
export type File = {
  type?: string;
  uri: string;
  name?: string;
};
export type FirInfo = {
  firDate?: string;
  firNo?: string;
  noOfAccused?: string,
  policeStation?: string;
  underSection?: string;
  incident?: string;
};
export type MessageDetails = {
  id?: string;
  caseId?: string;
  userId?: string;
  uri?: string;
  text?: string;
  type?: string,
  userImage?: string;
  userName?: string;
  createdAt?: string;
};
export type ReminderType = {
  id?: string;
  caseId?: string;
  userId?: string;
  reminderDate?: string,
  reminderTime?: string,
  isText: boolean,
  remindHourAgo: number,
  createdAt?: string;
};
export type Notification = {
  id?: string
  userId?: string
  title?: string
  body?: string
  image?: string
  type: string
  params?: any
  createdAt: string
  read: boolean
};
