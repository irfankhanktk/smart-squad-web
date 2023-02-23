import {Platform, StyleSheet} from 'react-native';
// import {
//   responsiveHeight,
//   responsiveWidth,
//   responsiveFontSize,
// } from 'react-native-responsive-dimensions';
// import {colors, fontFamily} from '../../globals/utilities';
// const tabBarHeight = responsiveHeight(8);
const styles = StyleSheet.create({
  bottomTabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  //   navigator: {
  //     borderTopWidth: 0,
  //     backgroundColor: 'transparent',
  //     elevation: 30,
  //     height:
  //       Platform.OS === 'android' ? responsiveHeight(7) : responsiveHeight(6),
  //   },
  //   badge: {
  //     width: responsiveWidth(5),
  //     height: responsiveWidth(5),
  //     borderRadius: responsiveWidth(2),
  //     backgroundColor: colors.primary,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     position: 'absolute',
  //     zIndex: 10,
  //     right: responsiveWidth(4.5),
  //     top: responsiveHeight(1.2),
  //     shadowColor: colors.primary,
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     alignItems: 'center',
  //     shadowOpacity: 0.25,
  //     shadowRadius: 3.84,
  //     borderTopWidth: responsiveWidth(0),
  //     elevation: 3,
  //   },
  //   tab: {
  //     alignItems: 'center',
  //     height: tabBarHeight,
  //     justifyContent: 'center',
  //     width: responsiveWidth(20),
  //   },
  //   titleText: {
  //     fontSize: responsiveFontSize(1.4),
  //     fontFamily: fontFamily.appTextBold,
  //     color: colors.black,
  //     paddingTop: responsiveHeight(0.5),
  //   },
});
export default styles;
