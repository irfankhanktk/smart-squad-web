import React from 'react';
import Auth from './auth';
import App from './app';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {linking} from './navigation/linking';
import {navigationRef} from './navigation-ref';
import {linking} from './linking';
const AppStack = createStackNavigator();
import {Provider as PaperProvider} from 'react-native-paper';
const AppNavigator = () => {
  return (
    <PaperProvider>
      <NavigationContainer ref={navigationRef} linking={linking}>
        <AppStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Auth'}>
          <AppStack.Screen name="Auth" component={Auth} />
          <AppStack.Screen name="App" component={App} />
        </AppStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;
