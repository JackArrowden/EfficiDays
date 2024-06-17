import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './app/LogIn';
import Load from './app/Load';
import Register from './app/Register';
import Todo from './app/Todo';
import Shop from './app/Shop';
import Learn from './app/Learn';
import Note from './app/Note';
import Profile from './app/Profile';

import Tabs from './app/_btmTabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="Learn" component={Learn} /> */}

        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;