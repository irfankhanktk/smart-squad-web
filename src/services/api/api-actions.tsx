// import { STORAGEKEYS } from "../../config/constants";
import { Alert } from 'react-native';
import { postData } from '.';
import { AppDispatch, RootState } from '../../store';
import { setUserInfo } from '../../store/reducers/user-reducer';
// import { UTILS } from "../../utils";
import { URLS } from './api-urls';

export const onLogin = (values: any, setLoading: (bool: boolean) => void, navigation: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      console.log('values=>', values);

      const res = await postData(URLS.auth.login, values);
      console.log('res of onLogin=>', res.data);
      // UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      dispatch(setUserInfo(res?.user));
      navigation.replace('App');
    } catch (error: any) {
      console.log('error=>>>m', error?.response?.data?.Message);

      Alert.alert('', error?.response?.data?.Message || error?.message);
    } finally {
      setLoading(false);
    }
  };
};

export const onVerifyUserUrl = async (url: string, values: any) => {
  const res = await postData(url, values);
  return res;
};
