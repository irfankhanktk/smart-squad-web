import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import { STORAGEKEYS } from '../../config/constants';
import { setLanguage } from '../../store/reducers/user-reducer';
import i18n from '../../translation';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Bold from '../../typography/bold-text';
import { UTILS } from '../../utils';
import { useAppDispatch } from './../../hooks/use-store';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      let screen: 'Login' | 'BottomTab' = 'Login';
      UTILS.getItem(STORAGEKEYS.userId).then((userId: any) => {

        if (userId) {
          screen = 'BottomTab';
        }
        UTILS.getItem(STORAGEKEYS.lang).then((lang) => {
          if (lang) {
            dispatch(setLanguage(lang));
            i18n.changeLanguage(lang);
          }
        });
        setTimeout(() => {
          // navigation?.replace(screen);
        }, 2000);
      })
    })()
  }, []);


  return (
    <View style={{ ...styles.container }}>
      <Bold label={'MUNSHI'} style={styles.iconText} />
    </View>
  );
};
export default Splash;
