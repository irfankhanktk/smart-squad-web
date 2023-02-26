import React from 'react';
import {View, Text} from 'react-native';

import {mvs} from '../../config/metrices';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors} from '../../config/colors';
import styles from './styles';
import {Icon} from 'react-native-elements';
// import CustomDrawer from '../drawer';
// import {useTranslation} from 'react-i18next';
const AppStack = createStackNavigator();
const HomeStack = createStackNavigator();
const FavouriteStack = createStackNavigator();
const AssetsStack = createStackNavigator();
const WachtlistStack = createStackNavigator();
const HistoryStack = createStackNavigator();
// const tabBarHeight =
//   Platform.OS == 'android' ? responsiveHeight(8) : responsiveHeight(10);
const MainTab = createBottomTabNavigator();
const MainApp = createStackNavigator();
// const Drawer = createDrawerNavigator();
import {
  Home,
  SearchRecord,
  SearchPerson,
  PersonSearchResult,
} from '../../screens/app';

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'History'}>
      <HomeStack.Screen name={'Home'} component={Home} />
    </HomeStack.Navigator>
  );
};
const FavouriteStackScreens = () => {
  return (
    <FavouriteStack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'History'}>
      <FavouriteStack.Screen name={'Home'} component={Home} />
    </FavouriteStack.Navigator>
  );
};

const MainTabScreens = props => {
  return (
    <MainTab.Navigator
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        allowFontScaling: true,
        tabBarShowLabel: false,
        gestureEnabled: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          display: 'flex',
          alignSelf: 'center',
          height: mvs(60),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          alignItems: 'center',
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          // borderTopLeftRadius: responsiveWidth(3),
          // borderTopRightRadius: responsiveWidth(3),
          position: 'absolute',
          bottom: 0,
        },
      }}
      initialRouteName={'HomeStackScreens'}>
      <MainTab.Screen
        name={'HomeStackScreens'}
        component={HomeStackScreens}
        options={() => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.tab}>
                <Icon
                  name="barschart"
                  type="antdesign"
                  size={mvs(15)}
                  color={focused ? colors.primary : colors.white}
                  tvParallaxProperties={{}}
                />
                <Text
                  style={{
                    ...styles.titleText,
                    color: focused ? colors.white : colors.gray,
                  }}>
                  Home
                </Text>
              </View>
            );
          },
        })}
      />

      <MainTab.Screen
        name={'FavouriteStackScreens'}
        component={FavouriteStackScreens}
        options={props => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.tab}>
                <Icon
                  name="graph"
                  type="octicon"
                  size={mvs(15)}
                  color={focused ? colors.primary : colors.white}
                  tvParallaxProperties={{}}
                />
                <Text
                  style={{
                    ...styles.titleText,
                    color: focused ? colors.white : colors.border,
                  }}>
                  Favourite
                </Text>
              </View>
            );
          },
        })}
      />
      {/* <MainTab.Screen
        name={'AssetsStackScreen'}
        component={AssetsStackScreen}
        options={props => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.tab}>
                <Icon
                  name="briefcase"
                  type="octicon"
                  size={responsiveFontSize(3)}
                  color={focused ? colors.primary : colors.white}
                  tvParallaxProperties={{}}
                />

                <Text
                  style={{
                    ...styles.titleText,
                    color: focused ? colors.primary : colors.white,
                  }}>
                  Assets
                </Text>
              </View>
            );
          },
        })}
      /> */}

      {/* <MainTab.Screen
        name={'WatchlistStackScreens'}
        component={WatchlistStackScreens}
        options={props => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.tab}>
                <Icon
                  name="telescope"
                  type="octicon"
                  size={responsiveFontSize(3)}
                  color={focused ? colors.primary : colors.white}
                  tvParallaxProperties={{}}
                />
                <Text
                  style={{
                    ...styles.titleText,
                    color: focused ? colors.primary : colors.white,
                  }}>
                  Watchlist
                </Text>
              </View>
            );
          },
        })}
      />

      <MainTab.Screen
        name={'HistoryStackScreens'}
        component={HistoryStackScreens}
        options={props => ({
          unmountOnBlur: true,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.tab}>
                <Icon
                  name="history"
                  type="material-community"
                  color={focused ? colors.primary : colors.white}
                  size={responsiveFontSize(3)}
                  tvParallaxProperties={{}}
                />
                <Text
                  style={{
                    ...styles.titleText,
                    color: focused ? colors.primary : colors.white,
                  }}>
                  History
                </Text>
              </View>
            );
          },
        })}
      /> */}
    </MainTab.Navigator>
  );
};
// const AppDrawer = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerShown: false,
//         overlayColor: 'rgba(0,0,0,0.5)',
//         drawerType: 'front',
//         drawerStyle: {
//           width: responsiveWidth(75),
//         },
//       }}
//       drawerContent={props => <CustomDrawer {...props} />}
//       initialRouteName={'MainTabScreens'}>
//       <Drawer.Screen name={'MainTabScreens'} component={MainTabScreens} />
//       <Drawer.Screen name={'SearchRecord'} component={SearchRecord} />
//     </Drawer.Navigator>
//   );
// };

const App = () => {
  return (
    <MainApp.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      defaultScreenOptions={{gestureEnabled: false}}
      initialRouteName={'Home'}>
      <MainApp.Screen name={'Home'} component={Home} />
      <MainApp.Screen name={'SearchRecord'} component={SearchRecord} />
      <MainApp.Screen name={'SearchPerson'} component={SearchPerson} />
      <MainApp.Screen
        name={'PersonSearchResult'}
        component={PersonSearchResult}
      />
    </MainApp.Navigator>
  );
};
export default App;
