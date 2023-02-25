import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const styles = StyleSheet.create({
  container: (top, bottom) => ({
    backgroundColor: colors.black,
    marginTop: mvs(top),
    marginBottom: mvs(bottom),
    width: '100%',
    alignItems: 'center',
  }),

  smallLogo: {
    alignSelf: 'center',
    marginVertical: mvs(20),
    height: mvs(40),
    width: mvs(120),
  },
  imgLogo: {
    alignSelf: 'center',
    height: mvs(170),
    width: '100%',
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: mvs(20),
  },
});

//make this component available to the app
export default styles;
