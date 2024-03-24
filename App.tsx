import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './src/components/signup';
import Opening from './src/components/opening';
import Login from './src/components/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Opening">
        <Stack.Screen name="Opening" component={Opening} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


