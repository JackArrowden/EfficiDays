import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from './app/LogIn';
import Load from './app/Load';
import Register from './app/Register';

import Tabs from './app/_btmTabs';

import ViewNote from './app/_noteTab/viewNote';
import deleteFile from './components/Note/deleteFile';
import { curDir, fileIndex, noteFile } from './data/noteDir';

const Stack = createNativeStackNavigator();

function App() {
  // deleteFile(fileIndex)
  // deleteFile(curDir)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Login" component={LogIn} options={{gestureEnabled: false}} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="Tabs" component={Tabs} options={{gestureEnabled: false}} />

        <Stack.Screen name="ViewNote" component={ViewNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;