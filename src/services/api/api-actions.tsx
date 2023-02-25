// import { STORAGEKEYS } from "../../config/constants";
import {Alert} from 'react-native';
import {postData} from '.';
import {AppDispatch, RootState} from '../../store';
import {setUserInfo} from '../../store/reducers/user-reducer';
// import { UTILS } from "../../utils";
import {URLS} from './api-urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const onLogin = (
  values: any,
  setLoading: (bool: boolean) => void,
  navigation: any,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      console.log('values=>', values);

      const res = await postData(URLS.auth.login, values);
      console.log('res of onLogin=>', res?.d);
      // UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      dispatch(setUserInfo(res?.d));
      await AsyncStorage.setItem('user', JSON.stringify(res?.d));
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
