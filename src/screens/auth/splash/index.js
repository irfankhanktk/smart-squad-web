import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, View} from 'react-native';
import {STORAGEKEYS} from '../../../config/constants';
import * as IMGS from '../../../assets/images';
import Bold from '../../../typography/bold-text';
import {UTILS} from '../../../utils';
import {useAppDispatch} from '../../../hooks/use-store';
import styles from './styles';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Medium from '../../../typography/medium-text';

const Splash = props => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const state = useSelector(state => state);

  React.useEffect(() => {
    (async () => {
      UTILS.getItem(STORAGEKEYS.user).then(async user => {
        let screen = 'VerifyUrl';
        let data = await AsyncStorage.getItem('user');
        if (data) {
          screen = 'App';
        } else {
          screen = 'VerifyUrl';
        }
        setTimeout(() => {
          navigation?.replace(screen);
        }, 2000);
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={IMGS.logofull_small} style={styles.imgLogo} />
    </View>
  );
};
export default Splash;
