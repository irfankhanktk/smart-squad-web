//import liraries
import { StyleSheet } from 'react-native';
import fonts from '../../../assets/fonts';
import { mvs } from '../../../config/metrices';

const styles = StyleSheet.create({
  container: color => ({
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: mvs(8),
    paddingHorizontal: mvs(5),
  }),
  titleText: color => ({
    color: color,
    fontSize: mvs(18),
    fontFamily: fonts.bold,
  }),
  emptyBox: {
    width: mvs(50),

    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default styles;
