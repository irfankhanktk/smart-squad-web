// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Login, Splash, VerifyAgencyCode, VerifyUrl} from '../../screens/auth';
import {horizontalAnimation} from '../../utils';
import {colors} from '../../config/colors';
const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.black}
        barStyle={'light-content'}
      />
      <Stack.Navigator
        initialRouteName="VerifyUrl"
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="VerifyUrl" component={VerifyUrl} />
          <Stack.Screen name="VerifyAgencyCode" component={VerifyAgencyCode} />
        </Stack.Group>
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary},
});
