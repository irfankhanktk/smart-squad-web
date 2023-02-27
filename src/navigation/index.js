import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import App from './app';
import Auth from './auth';
// import {linking} from './navigation/linking';
import { linking } from './linking';
import { navigationRef } from './navigation-ref';
const AppStack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <AppStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Auth'}>
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="App" component={App} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
