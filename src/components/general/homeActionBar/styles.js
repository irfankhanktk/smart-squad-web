import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: '100%',
    alignSelf: 'center',
    paddingVertical: mvs(10),
    marginTop: mvs(30),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(15),
  },
});

//make this component available to the app
export default styles;
