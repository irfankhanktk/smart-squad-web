import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './store';
import './config/axios-interceptor';
import AppNavigator from './navigation';

function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
