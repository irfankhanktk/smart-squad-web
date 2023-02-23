import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  welcomeText: {
    color: colors.white,
  },
  iconText: {
    fontSize: mvs(28),
    marginTop: mvs(19),
  },
});
export default styles;
