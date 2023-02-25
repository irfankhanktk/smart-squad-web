import {StyleSheet} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
const styles = StyleSheet.create({
  container: marginTop => ({
    marginTop: mvs(marginTop),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  }),
  btnStyels: width => ({
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: mvs(18),
    paddingVertical: mvs(10),
    borderRadius: mvs(2),
    alignItems: 'center',
  }),

  btnText: {
    color: colors.white,
    textAlign: 'left',
    // fontFamily: fontFamily.appTextExtraBold,
    fontSize: mvs(22),
    paddingLeft: mvs(15),
    maxWidth: mvs(250),
  },
  countText: {
    color: 'gray',
    textAlign: 'left',
    fontSize: mvs(18),
    paddingRight: mvs(15),
  },
});

//make this component available to the app
export default styles;
