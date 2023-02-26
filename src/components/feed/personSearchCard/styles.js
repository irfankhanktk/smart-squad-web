import {StyleSheet} from 'react-native';
import {mvs} from '../../../config/metrices';
import {colors} from '../../../config/colors';

const styles = StyleSheet.create({
  container: backgroundColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '96%',
    padding: mvs(14),
    paddingHorizontal: mvs(16),
    marginTop: mvs(3),
    backgroundColor: backgroundColor,
    borderRadius: mvs(5),
  }),
  alertStyle: {
    position: 'absolute',
    top: mvs(-20),
    left: mvs(3),
    zIndex: 10,
  },
  rowView: {
    flexDirection: 'row',
  },
  title: colors => ({
    fontSize: mvs(16),
    color: colors.textBlack,
    color: colors.text,
    fontWeight: 'bold',
    textAlign: 'left',
  }),
  rightTextContainer: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: mvs(5),
    paddingHorizontal: mvs(7),
    paddingVertical: mvs(3),
    borderWidth: mvs(0.5),
  },

  iconContainer: {
    width: mvs(38),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    fontSize: mvs(12),
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subTitleText: {
    fontSize: mvs(12),
    color: colors.white,
    textAlign: 'left',
  },
});

export default styles;
