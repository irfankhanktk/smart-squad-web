
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home, PersonSearchResult, SearchPerson, SearchRecord
} from '../../screens/app';
const MainApp = createStackNavigator();
const App = () => {
  return (
    <MainApp.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      defaultScreenOptions={{ gestureEnabled: false }}
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
