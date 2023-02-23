import {StyleSheet, Platform} from 'react-native';

import {mvs} from '../../../config/metrices';
import {colors} from '../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  logoContainer: {
    paddingHorizontal: '15%',
    height: 100,
    backgroundColor: 'black',
    paddingVertical: 4,
  },
  rmsCredentails: {
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: mvs(28),
    fontSize: mvs(20),
    paddingBottom: mvs(20),
  },
  imgLogo: {
    alignSelf: 'center',
    marginVertical: mvs(20),
    height: mvs(90),
    width: mvs(250),
  },
  bodyContainer: {
    paddingHorizontal: 18,
    paddingVertical: 28,
  },
  textDesc: {
    textAlign: 'center',
    fontSize: 16,
  },
  textTitle: {
    textAlign: 'left',
    fontSize: 16,
  },
  textTitleDesc: {
    textAlign: 'left',
    fontSize: 16,
  },
});

export default styles;
