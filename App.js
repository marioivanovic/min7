import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import LoginScreen from './loginScreen.js';
import CoachScreen from './coachScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Coach" component={CoachScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;