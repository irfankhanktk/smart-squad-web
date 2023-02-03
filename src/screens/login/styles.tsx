import { Platform, StyleSheet } from 'react-native';
import { mvs } from '../../config/metrices';
import { colors, darkTheme } from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  middle: {
    width: Platform.OS === 'web' ? mvs(300) : undefined,
    alignSelf: Platform.OS === 'web' ? 'center' : 'auto'
  },
  img: { height: '100%', width: '100%' },
  label: {
    paddingHorizontal: mvs(20),
    paddingBottom: mvs(26),
    alignItems: 'flex-start',
  },
  contentContainerStyle: {
    paddingHorizontal: mvs(20),
    flexGrow: 1,
  },
  button: {
    marginTop: mvs(10),
  },
  accountText: {
    marginTop: mvs(20),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupText: { marginLeft: mvs(5) },
});
export default styles;
