import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './page/LoginScreen';
import DashboardScreen from './page/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{animation: 'slide_from_left', headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{animation: 'slide_from_left', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
